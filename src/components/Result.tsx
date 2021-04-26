import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../state/store";
import { sort } from "../utils/topologicalSort";

const Result = () => {
  const state = useSelector((state: AppState) => state.ranking);
  const { rankingMap, items, deps } = state;
  const resultsLength = rankingMap ? Object.keys(rankingMap).length : 0;
  const [result, setResult] = useState<string[]>(Array(resultsLength).fill(""));

  useEffect(() => {
    const orderedItems = sort(items, deps);
    setResult(orderedItems);
    console.log(orderedItems);
    // eslint-disable-next-line
  }, [deps]);
  return (
    <div data-testid="resultsList">
      {result[0] &&
        result.map((item: string | null, i: number) => (
          <p key={`${item}_${i}`} data-testid="item-test-id">
            {item}
          </p>
        ))}
    </div>
  );
};

export default Result;
