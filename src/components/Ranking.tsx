import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showNewOptionsAction } from "../state/selection/selectionActions";
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
  const { libraryItems } = props;
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
  return <div>{options && <Cards items={options} />}</div>;
};

export default Ranking;
