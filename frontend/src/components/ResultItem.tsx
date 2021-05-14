import React from "react";
import { useSelector } from "react-redux";
import IRanking from "../state/ranking/models/result";
import { ISelection } from "../state/selection/models/selection";
import { AppState } from "../state/store";
import CloudImage from "./CloudImage";

interface ResultItemProps {
  name: string;
  ranked: boolean;
}
const ResultItem = (props: ResultItemProps) => {
  const { name, ranked } = props;
  const { deck } = useSelector(
    (state: AppState) => state.selection
  ) as ISelection;
  const { rankingMap } = useSelector(
    (state: AppState) => state.ranking
  ) as IRanking;
  const score =
    ranked && rankingMap && rankingMap[name]
      ? Object.values(rankingMap[name]).reduce((a, b) => a + b)
      : "-";
  return (
    <div
      id="resultItem"
      data-testid="item-test-id"
      className="d-flex justify-content-between align-items-center bg-white rounded mb-2 px-1"
    >
      <div className="d-flex d-flex-inline justify-content-start align-items-center">
        <CloudImage
          className="rounded-circle mx-1"
          imageId={deck?.items[name]}
          height={30}
          width={30}
        />
        <span className="text-uppercase">{name}</span>
      </div>

      <span className="flex-fixed-width-item px-sm-2 border-start">
        {score}
      </span>
    </div>
  );
};

export default ResultItem;
