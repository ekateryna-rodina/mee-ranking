import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IDeck } from "../state/deck/models/deck";
import { AppState } from "../state/store";
import { sort } from "../utils/topologicalSort";
import ResultItem from "./ResultItem";

const Result = () => {
  const state = useSelector((state: AppState) => state.ranking);
  const { rankingMap, items, deps } = state;
  const resultsLength = rankingMap ? Object.keys(rankingMap).length : 0;
  const [ordered, setOrdered] = useState<string[]>(
    Array(resultsLength).fill("")
  );
  const { showResult } = useSelector((state: AppState) => state.controls);
  const deck = useSelector((state: AppState) => state.deck) as IDeck;
  const deckItems = deck.items;
  // const testCompleted: [string, string, number | undefined][] = [
  //   ["wall-e", "../img/nemo.png", 1],
  //   ["toy story", "../img/incredibles.png", 0],
  // ];
  useEffect(() => {
    const orderedItems = sort(items, deps);
    setOrdered(orderedItems);
    console.log(orderedItems);
    // eslint-disable-next-line
  }, [deps]);
  return (
    <div
      id="results"
      data-testid="resultsList"
      className={`sliding-wrapper ${showResult ? "shown" : ""}`}
    >
      <div className="sliding bg-primary">
        <div className="container p-3">
          <h1 className="font-weight-bold text-uppercase">results</h1>
          <h4 className="text-uppercase">1 of 10 completed</h4>
          {ordered.map((i: string, index: number) => (
            <ResultItem
              key={index.toString()}
              imagePath={""}
              name={i}
              score={5}
            />
          ))}
        </div>
      </div>
    </div>
    // <div data-testid="resultsList">
    //   {result[0] &&
    //     result.map((item: string | null, i: number) => (
    //       <p key={`${item}_${i}`} data-testid="item-test-id">
    //         {item}
    //       </p>
    //     ))}
    // </div>
  );
};

export default Result;