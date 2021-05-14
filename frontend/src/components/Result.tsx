import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IRanking from "../state/ranking/models/result";
import { updateOrderedItemsAction } from "../state/ranking/rankingActions";
import { ISelection } from "../state/selection/models/selection";
import { AppState } from "../state/store";
import { sort } from "../utils/topologicalSort";
import OrderedList from "./OrderedList";

const Result = () => {
  const { deps, orderedItems, rankingMap } = useSelector(
    (state: AppState) => state.ranking
  ) as IRanking;
  const {
    deck: { items },
    totalCount,
    counter,
  } = useSelector((state: AppState) => state.selection) as ISelection;
  const allItems = Object.keys(items);
  const dispatch = useDispatch();
  const { showResult } = useSelector((state: AppState) => state.controls);
  const [ranked, setRanked] = useState<string[]>([]);
  const [unRanked, setUnRanked] = useState<string[]>([]);
  useEffect(() => {
    setUnRanked(allItems.filter((i) => !orderedItems.includes(i)));
    // eslint-disable-next-line
  }, [items]);
  useEffect(() => {
    const rankingResult = sort(Object.keys(rankingMap), deps);
    dispatch(updateOrderedItemsAction(rankingResult));
    // eslint-disable-next-line
  }, [deps]);
  useEffect(() => {
    setRanked(orderedItems);
    setUnRanked(allItems.filter((i) => !orderedItems.includes(i)));
    // eslint-disable-next-line
  }, [orderedItems]);

  return (
    <div
      id="results"
      data-testid="resultsList"
      className={`sliding-wrapper ${showResult ? "shown" : ""}`}
    >
      <div className="sliding bg-primary">
        <div className="container p-3">
          <h1 className="font-weight-bold text-uppercase">results</h1>
          {ranked.length > 0 && (
            <div>
              <h4 className="text-uppercase">
                {counter} of {totalCount} completed
              </h4>
              <OrderedList items={ranked} ranked={true} />
            </div>
          )}
          {unRanked.length > 0 && (
            <div>
              <h4 className="text-uppercase">not ranked yet</h4>
              <OrderedList items={unRanked} ranked={false} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
