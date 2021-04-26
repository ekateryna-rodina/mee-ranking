// import React, { useEffect, useState } from "react";
// import { IRankingMap } from "../models/IRankingMap";
// import { ResultResolver } from "../utils/resultResolver";

// interface ResultProps {
//   rankingResult: IRankingMap;
// }
// type ResultType = {
//   [name: string]: number;
// }[];
// function getScores(rankingResult: IRankingMap) {
//   // create key/score object
//   const scores: [key: string, value: number][] = Object.entries(
//     rankingResult
//   ).map(([k, v], i) => {
//     const scoresSum = Object.values(rankingResult[k]).reduce((a, b) => a + b);
//     return [k, scoresSum];
//   });
//   return scores;
// }

// function processResult(rankingResult: IRankingMap) {
//   const scores = getScores(rankingResult);
//   const result = new ResultResolver(rankingResult, scores).resolve();
//   return result;
// }

// const Result = (props: ResultProps) => {
//   const { rankingResult } = props;
//   const [isResolved, setIsResolved] = useState<boolean>(false);
//   const [sortedResult, setSortedResult] = useState<ResultType>([]);
//   useEffect(() => {
//     //   resolve
//     const sortedResult: {}[] = processResult(rankingResult);
//     setSortedResult(sortedResult);
//     setIsResolved(true);
//   }, [rankingResult]);
//   if (!isResolved) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       {sortedResult.map((item, index) => (
//         <div key={index.toString()}>
//           <span>{Object.keys(item)[0]}:</span>{" "}
//           <span>{Object.values(item)[0]}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Result;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../state/store";

const Result = () => {
  const state = useSelector((state: AppState) => state.ranking);
  const { rankingMap } = state;
  const resultsLength = rankingMap ? Object.keys(rankingMap).length : 0;
  const [result, setResult] = useState<null[] | string[]>(
    Array(resultsLength).fill(null)
  );

  useEffect(() => {
    console.log(rankingMap);
  }, [rankingMap]);
  return (
    <div data-testid="resultsList">
      {result.map((item: string | null, i: number) => (
        <p key={`${item}_${i}`} data-testid="item-test-id">
          {item}
        </p>
      ))}
    </div>
  );
};

export default Result;
