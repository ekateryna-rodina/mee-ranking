import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IDeck } from "../state/deck/models/deck";
import { AppState } from "../state/store";
import DeckItem from "./DeckItem";

const Deck = () => {
  const state = useSelector((state: AppState) => state.deck);
  const { topic, items } = state as IDeck;
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div>
      {!topic.id && <div>Create new deck</div>}
      {topic.id && <div>{topic.title}</div>}
      {topic.id && !Object.keys(items).length && (
        <div data-testid="noItemsPlaceholder">
          There are no items in the deck yet
        </div>
      )}
      <div data-testid="votingItemsContainer" className="list-unstyled">
        {Object.keys(items).map((key: string) => (
          <DeckItem key={key} name={key} image={items[key]} />
        ))}
      </div>
    </div>
  );
};

export default Deck;
