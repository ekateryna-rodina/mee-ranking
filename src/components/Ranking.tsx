import React, { useEffect, useState } from "react";
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

    const newRankingResult = {
      ...rankingResult,
      [winner]: { ...rankingResult[winner], [looser]: 1 },
      [looser]: { ...rankingResult[looser], [winner]: 0 },
    };
    return newRankingResult;
  };

  useEffect(() => {
    setNextItems();
  }, [rankingResult]);
  useEffect(() => {
    if (itemChosen !== -1) {
      const newRanking = newRankingResult();
      setRankingResult(newRanking);
    }
    // eslint-disable-next-line
  }, [itemChosen]);
  useEffect(() => {}, [rankingResult]);
  useEffect(() => {
    if (index > 1) {
      setNextItems();
    }
    // eslint-disable-next-line
  }, [index]);
  return (
    <>
      {console.log(items)}
      {items?.length && (
        <Cards items={items} setItemChosen={itemChosenHandler} />
      )}
    </>
  );
};

export default Ranking;

// import React, { useEffect, useState } from "react";
// import { IRankingMap } from "../models/IRankingMap";
// import ShuffledArray from "../utils/arrayHelpers";
// let shuffledItems: string[][] = [];
// interface RankingProps {
//   libraryItems: string[];
//   setShowResult?: Function;
//   setRankingResult: Function;
//   rankingResult: IRankingMap;
// }
// const createShuffledPairs = (libraryItems: string[]) => {
//   const pairs: string[][] = [];
//   for (let i = 0; i < libraryItems.length; i++) {
//     for (let j = i + 1; j < libraryItems.length; j++) {
//       pairs.push([libraryItems[i], libraryItems[j]]);
//     }
//   }

//   shuffledItems = new ShuffledArray(pairs).shuffle();
// };
// function* generatePair(shuffledItems: string[][]) {
//   for (let pair of shuffledItems) {
//     yield pair;
//   }
// }
// // const pairGenerator: Generator<string[]> = generatePair(shuffledItems);

// const Ranking = (props: RankingProps) => {
//   const [pair, setPair] = useState<string[]>([]);
//   const [pairs, setPairs] = useState<string[][]>([]);
//   const [pairIndex, setPairIndex] = useState<number>(0);
//   const [combinationsCount, setCombinationsCount] = useState<number>();
//   const [pairChosen, setPairChosen] = useState<number>(-1);
//   const {
//     libraryItems,
//     setShowResult,
//     setRankingResult,
//     rankingResult,
//   } = props;

//   const getNextPair = () => {
//     console.log(`Index ${pairIndex}`);
//     console.log(`Combinations ${combinationsCount}`);
//     if (pairIndex === combinationsCount) {
//       console.log("");
//       // setShowResult(true);
//     }

//     setPair(pairs[pairIndex]);
//     setPairIndex(pairIndex + 1);
//   };
//   const vote = () => {
//     if (pairChosen === -1) {
//       return;
//     }
//     const winner = pair[pairChosen];
//     const looser = pair[Number(Boolean(!pairChosen))];

//     setRankingResult({
//       ...rankingResult,
//       [winner]: { ...rankingResult[winner], [looser]: 1 },
//       [looser]: { ...rankingResult[looser], [winner]: 0 },
//     });
//   };
//   const voteAndGetNextPairHandler = () => {
//     vote();
//     getNextPair();
//   };
//   const setPairChosenHandler = (winIndex: number) => {
//     setPairChosen(-1);
//     setPairChosen(winIndex);
//   };
//   const setRankingMap = (set: string[]) => {
//     let rankingMap: IRankingMap = {};
//     for (let i of set) {
//       rankingMap[i] = {};
//     }

//     return rankingMap;
//   };

//   useEffect(() => {
//     // createShuffledPairs(libraryItems);
//     // const pair: string[] = pairGenerator.next().value;
//     // setPair(pair);
//     const rankingMap = setRankingMap(libraryItems);
//     setRankingResult(rankingMap);
//     // eslint-disable-next-line
//   }, []);
//   useEffect(() => {
//     if (pairs.length > 0) {
//       setCombinationsCount(pairs.length);
//       // setPair(pairGenerator.next().value);
//       // setPairIndex(pairIndex + 1);
//     }
//     // getNextPair();
//     // eslint-disable-next-line
//   }, [pairs]);

//   useEffect(() => {
//     console.log(rankingResult);
//   }, [rankingResult]);
//   return (
//     <div>
//       <span data-testid="firstItem" onClick={() => setPairChosenHandler(0)}>
//         Jeff
//       </span>
//       {pair && (
//         <div>
//           <span data-testid="firsItem" onClick={() => setPairChosenHandler(0)}>
//             {pair[0]}
//           </span>
//           {"    "}
//           <span
//             data-testid="secondItem"
//             onClick={() => setPairChosenHandler(1)}
//           >
//             {pair[1]}
//           </span>
//         </div>
//       )}
//       <button onClick={voteAndGetNextPairHandler}>Next!</button>
//     </div>
//   );
// };

// export default Ranking;
