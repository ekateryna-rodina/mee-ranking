import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICard } from "../state/selection/models/card";
import { showNewOptionsAction } from "../state/selection/selectionActions";
import { AppState } from "../state/store";
import ShuffledArray from "../utils/arrayHelpers";
import Cards from "./Cards";
import ControlButtons from "./ControlButtons";

let pairsGenerator: Generator<ICard[]> | null = null;
interface RankingProps {
  libraryItems: ICard[];
}

function generator(libraryItems: ICard[]) {
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
  const { libraryItems } = props;
  console.log("this is items");
  console.log(libraryItems);
  const selection = useSelector((state: AppState) => state.selection);
  const ranking = useSelector((state: AppState) => state.ranking);
  const { rankingMap } = ranking;
  const { options } = selection;
  const dispatch = useDispatch();

  pairsGenerator = pairsGenerator ?? generator(libraryItems);

  const getNextItems = () => {
    const pair: string[] = pairsGenerator?.next().value as string[];
    return pair;
  };

  useEffect(() => {
    const pair = getNextItems();
    dispatch(showNewOptionsAction(pair));
    // eslint-disable-next-line
  }, [rankingMap]);
  return (
    <div
      className="bg-gray d-flex d-flex-column justify-content-center align-items-center text-center"
      id="ranking-page"
    >
      <div className="container">
        <div id="ranking">
          <h2 className="text-uppercase mb-5">Which pixar movie is better?</h2>
          <Cards items={options} />
        </div>
        <div
          id="controls-section"
          className="d-flex justify-content-between align-items-center mt-5"
        >
          <progress max="100" value="85"></progress>
          <ControlButtons />
        </div>
      </div>
    </div>
  );
  // return <div>{options && <Cards items={options} />}</div>;
};

export default Ranking;
