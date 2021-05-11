import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IDeck } from "../state/deck/models/deck";
import { showNewOptionsAction } from "../state/selection/selectionActions";
import { AppState } from "../state/store";
import ShuffledArray from "../utils/arrayHelpers";
import Cards from "./Cards";
import ControlButtons from "./ControlButtons";

let pairsGenerator: Generator<string[]> | null = null;

function generator(deckItems: string[]) {
  let counter = 0;
  let init: string[][] = [];
  for (let i = 0; i < deckItems.length; i++) {
    for (let j = i + 1; j < deckItems.length; j++) {
      init.push([deckItems[i], deckItems[j]]);
    }
  }
  const shuffledItems: string[][] = new ShuffledArray(init).shuffle() || [];
  return (function* () {
    for (let k = 0; k < shuffledItems.length; k++) {
      counter++;
      console.log(`pair # ${counter}`);
      yield shuffledItems[k];
    }
  })();
}

const Ranking = () => {
  const [topic, setTopic] = useState<string>("");
  const [allItems, setAllItems] = useState<{}>({});
  const selection = useSelector((state: AppState) => state.selection);
  const ranking = useSelector((state: AppState) => state.ranking);
  const { rankingMap } = ranking;
  const { deck } = selection;
  const dispatch = useDispatch();
  const getNextItems = () => {
    const pair: string[] = pairsGenerator?.next().value as string[];
    return pair;
  };

  useEffect(() => {
    if (!deck) return;
    setTopic((deck as IDeck).topic.title);
    setAllItems((deck as IDeck).items);
    // const title = (deck as IDeck)?.topic.title;
    // topicName.current = title;
  }, [deck]);
  useEffect(() => {
    if (allItems && Object.keys(allItems).length) {
      pairsGenerator = pairsGenerator ?? generator(Object.keys(allItems));
      const pair = getNextItems();
      dispatch(showNewOptionsAction(pair));
    }
    // eslint-disable-next-line
  }, [allItems]);
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
          <h2 className="text-uppercase mb-5">{topic}</h2>
          <Cards />
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
};

export default Ranking;
