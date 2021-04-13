// import React, { useEffect, useState } from "react";

// interface RankingProps {
//   libraryItems: string[];
// }
// function* pairGenerator() {
//   let set = [
//     "Tom Cruise",
//     "Tom Hanks",
//     "Leonardo DiCaprio",
//     "One more Actor",
//     "One more Actor1",
//     "One more Actor2",
//     "Tom Cruise1",
//     "Tom Cruise2",
//   ];
//   for (let i = 0; i < set.length; i++) {
//     for (let j = i + 1; j < set.length; j++) {
//       yield [set[i], set[j]];
//     }
//   }
// }
// const generate = pairGenerator();
// const Ranking = (props: RankingProps) => {
//   const [pair, setPair] = useState<string[]>([]);
//   const { libraryItems } = props;
//   useEffect(() => {}, []);
//   const getNextPairHandler = () => {
//     const newPair = generate.next().value;
//     if (newPair) {
//       setPair(newPair);
//     }
//   };
//   return (
//     <div>
//       {libraryItems.map((item, index) => (
//         <div key={index.toString()}>{item}</div>
//       ))}
//       <button onClick={getNextPairHandler}>Show me a pair</button>
//       <div>
//         <span>{pair[0]}</span> <span>{pair[1]}</span>
//       </div>
//     </div>
//   );
// };

// export default Ranking;

// import React, { useEffect, useRef, useState } from "react";

// interface RankingProps {
//   libraryItems: string[];
// }
// function* pairGenerator() {
//   let set = [
//     "Tom Cruise",
//     "Tom Hanks",
//     "Leonardo DiCaprio",
//     "One more Actor",
//     "One more Actor1",
//     "One more Actor2",
//     "Tom Cruise1",
//     "Tom Cruise2",
//   ];
//   for (let i = 0; i < set.length; i++) {
//     for (let j = i + 1; j < set.length; j++) {
//       yield [set[i], set[j]];
//     }
//   }
// }
// function generate(set: string[]) {
//   return (function* () {
//     const pairsFrom = set;
//     console.log(pairsFrom);
//     for (let i = 0; i < pairsFrom.length; i++) {
//       for (let j = i + 1; j < pairsFrom.length; j++) {
//         console.log(pairsFrom[j]);
//         yield [pairsFrom[i], pairsFrom[j]];
//       }
//     }
//   })();
// }
// const Ranking = (props: RankingProps) => {
//   const [pair, setPair] = useState<string[]>([]);
//   const { libraryItems } = props;
//   let generator = useRef<Generator<string[], void, unknown>>(null)
//   useEffect(() => {
//     let set = [
//         "Tom Cruise",
//         "Tom Hanks",
//         "Leonardo DiCaprio",
//         "One more Actor",
//         "One more Actor1",
//         "One more Actor2",
//         "Tom Cruise1",
//         "Tom Cruise2",
//       ];
//       generator.current = generate(set);

//   }, [])
//   const getNextPairHandler = () => {
//     const newPair = generator.next().value;
//     if (newPair) {
//       setPair(newPair);
//     }
//   };
//   return (
//     <div>
//       {libraryItems.map((item, index) => (
//         <div key={index.toString()}>{item}</div>
//       ))}
//       <button onClick={getNextPairHandler}>Show me a pair</button>
//       <div>
//         <span>{pair[0]}</span> <span>{pair[1]}</span>
//       </div>
//     </div>
//   );
// };

// export default Ranking;

import React, { useEffect, useState } from "react";

interface RankingProps {
  libraryItems: string[];
}
interface IRankingMap {
  [key: string]: number;
}

const Ranking = (props: RankingProps) => {
  const [pair, setPair] = useState<string[]>([]);
  const [pairs, setPairs] = useState<string[][]>([]);
  const [pairIndex, setPairIndex] = useState<number>(-1);
  const [combinationsCount, setCombinationsCount] = useState<number>();
  const [showRankingResults, setShowRankingResults] = useState<boolean>(false);
  const [rankingResult, setRankingResult] = useState<IRankingMap>({});
  const [pairChosen, setPairChosen] = useState<number>(-1);
  const { libraryItems } = props;

  const getPairs = (libraryItems: string[]) => {
    const pairs: string[][] = [];
    for (let i = 0; i < libraryItems.length; i++) {
      for (let j = i + 1; j < libraryItems.length; j++) {
        pairs.push([libraryItems[i], libraryItems[j]]);
      }
    }
    return pairs;
  };
  const getNextPairHandler = () => {
    const nextPairIndex = pairIndex + 1;
    setPairIndex(nextPairIndex);
    setPairChosen(-1);
    console.log(combinationsCount);
    if (pairIndex === combinationsCount) {
      setShowRankingResults(true);
    }

    setPair(pairs[pairIndex]);
  };
  const setPairChosenHandler = (winIndex: number) => {
    console.log(pair[winIndex]);
    setPairChosen(winIndex);
  };
  const setRankingMap = (set: string[]) => {
    let rankingMap: IRankingMap = {};
    for (let i of set) {
      rankingMap[i] = 0;
    }

    return rankingMap;
  };

  useEffect(() => {
    const pairsGenerated = getPairs(libraryItems);
    setPairs(pairsGenerated);
    setCombinationsCount(pairsGenerated.length);
    getNextPairHandler();
    const rankingMap = setRankingMap(libraryItems);
    setRankingResult(rankingMap);
    // eslint-disable-next-line
  }, [libraryItems]);

  useEffect(() => {
    let winner;
    if (pairChosen !== -1) {
      console.log("chosen!");
      winner = pair[pairChosen];
      const oldRank = rankingResult[winner];
      console.log(`old rank of ${winner} is ${oldRank}`);
      const newRank = oldRank + 1.1;
      console.log(`new rank of ${winner} is ${newRank}`);
      setRankingResult({ ...rankingResult, [winner]: newRank });
    }
    // eslint-disable-next-line
  }, [pairChosen]);
  useEffect(() => {
    console.log(rankingResult);
  }, [rankingResult]);
  return (
    <div>
      {libraryItems.map((item, index) => (
        <div key={index.toString()}>{item}</div>
      ))}
      <button onClick={getNextPairHandler}>Show me a pair</button>
      {pair && (
        <div>
          <span onClick={() => setPairChosenHandler(0)}>{pair[0]}</span>{" "}
          <span onClick={() => setPairChosenHandler(1)}>{pair[1]}</span>
        </div>
      )}
      {showRankingResults && (
        <div>
          {Object.keys(rankingResult).map((key, value) => (
            <div>
              <span>{key}:</span> <span>{rankingResult[key]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ranking;
