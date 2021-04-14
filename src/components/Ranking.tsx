import React, { useEffect, useState } from "react";
import { IRankingMap } from "../models/IRankingMap";

interface RankingProps {
  libraryItems: string[];
  setShowResult: Function;
  setRankingResult: Function;
  rankingResult: IRankingMap;
}

const Ranking = (props: RankingProps) => {
  const [pair, setPair] = useState<string[]>([]);
  const [pairs, setPairs] = useState<string[][]>([]);
  const [pairIndex, setPairIndex] = useState<number>(0);
  const [combinationsCount, setCombinationsCount] = useState<number>();
  const [pairChosen, setPairChosen] = useState<number>(-1);
  const {
    libraryItems,
    setShowResult,
    setRankingResult,
    rankingResult,
  } = props;

  const getPairs = (libraryItems: string[]) => {
    const pairs: string[][] = [];
    for (let i = 0; i < libraryItems.length; i++) {
      for (let j = i + 1; j < libraryItems.length; j++) {
        pairs.push([libraryItems[i], libraryItems[j]]);
      }
    }
    return pairs;
  };
  const getNextPair = () => {
    console.log(`Index ${pairIndex}`);
    console.log(`Combinations ${combinationsCount}`);
    if (pairIndex === combinationsCount) {
      setShowResult(true);
    }

    setPair(pairs[pairIndex]);
    setPairIndex(pairIndex + 1);
  };
  const vote = () => {
    if (pairChosen === -1) {
      return;
    }
    const winner = pair[pairChosen];
    const looser = pair[Number(Boolean(!pairChosen))];

    setRankingResult({
      ...rankingResult,
      [winner]: { ...rankingResult[winner], [looser]: 1 },
      [looser]: { ...rankingResult[looser], [winner]: 0 },
    });
  };
  const voteAndGetNextPairHandler = () => {
    vote();
    getNextPair();
  };
  const setPairChosenHandler = (winIndex: number) => {
    setPairChosen(-1);
    setPairChosen(winIndex);
  };
  const setRankingMap = (set: string[]) => {
    let rankingMap: IRankingMap = {};
    for (let i of set) {
      rankingMap[i] = {};
    }

    return rankingMap;
  };

  useEffect(() => {
    const pairsGenerated = getPairs(libraryItems);
    setPairs(pairsGenerated);
    const rankingMap = setRankingMap(libraryItems);
    setRankingResult(rankingMap);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (pairs.length > 0) {
      setCombinationsCount(pairs.length);
      setPair(pairs[pairIndex]);
      setPairIndex(pairIndex + 1);
    }
    // getNextPair();
    // eslint-disable-next-line
  }, [pairs]);

  useEffect(() => {
    console.log(rankingResult);
  }, [rankingResult]);
  return (
    <div>
      {pair && (
        <div>
          <span onClick={() => setPairChosenHandler(0)}>{pair[0]}</span>
          {"    "}
          <span onClick={() => setPairChosenHandler(1)}>{pair[1]}</span>
        </div>
      )}
      <button onClick={voteAndGetNextPairHandler}>Next!</button>
    </div>
  );
};

export default Ranking;
