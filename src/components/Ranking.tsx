import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRankingMap } from "../state/ranking/rankingActions";
import { AppState } from "../state/store";
import ShuffledArray from "../utils/arrayHelpers";
import Cards from "./Cards";

let pairsGenerator: Generator<string[]> | null = null;
interface RankingProps {
  libraryItems: string[];
  setShowResult?: Function;
}

function generator(libraryItems: string[]) {
  let init = [];
  for (let i = 0; i < libraryItems.length; i++) {
    for (let j = i + 1; j < libraryItems.length; j++) {
      init.push([libraryItems[i], libraryItems[j]]);
    }
  }
  const shuffledItems = new ShuffledArray(init).shuffle() || [];
  return (function* () {
    for (let k = 0; k < shuffledItems.length; k++) {
      yield shuffledItems[k];
    }
  })();
}

const Ranking = (props: RankingProps) => {
  const [items, setItems] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(1);
  const [itemChosen, setItemChosen] = useState<number>(-1);
  const { libraryItems } = props;
  const [rankingResult, setRankingResult] = useState<{ [key: string]: {} }>({});
  const ranking = useSelector((state: AppState) => state.ranking);
  const dispatch = useDispatch();
  const itemChosenHandler = (item: number) => {
    const newIndex = index + 1;
    setIndex(newIndex);
    setItemChosen(-1);
    setItemChosen(item);
  };
  pairsGenerator = pairsGenerator ?? generator(libraryItems);

  const setNextItems = () => {
    const pair: string[] = pairsGenerator?.next().value as string[];
    setItems(pair);
  };

  const newRankingResult = () => {
    const winner = items[itemChosen];
    const looser = items[Number(Boolean(!itemChosen))];

    // const newRankingResult = {
    //   // ...rankingResult,
    //   [winner]: { ...rankingResult[winner], [looser]: 1 },
    //   [looser]: { ...rankingResult[looser], [winner]: 0 },
    // };
    return [winner, looser];
  };

  useEffect(() => {
    setNextItems();
  }, [rankingResult]);
  useEffect(() => {
    console.log("item chosen");
    if (itemChosen !== -1) {
      // const newRanking = newRankingResult();
      // setRankingResult(newRanking);
      const newRankingArgs = newRankingResult();
      console.log(newRankingArgs);
      dispatch(updateRankingMap(newRankingArgs));
    }
    // eslint-disable-next-line
  }, [itemChosen]);
  useEffect(() => {
    if (index > 1) {
      setNextItems();
    }
    // eslint-disable-next-line
  }, [index]);
  return (
    <div>
      {items?.length && (
        <Cards items={items} setItemChosen={itemChosenHandler} />
      )}
    </div>
  );
};

export default Ranking;
