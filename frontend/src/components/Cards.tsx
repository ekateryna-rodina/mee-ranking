import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRankingMapAction } from "../state/ranking/rankingActions";
import { ISelection } from "../state/selection/models/selection";
import { AppState } from "../state/store";
import CloudImage from "./CloudImage";

interface ICardProps {
  name: string;
  imageId?: any;
  index: string;
  clickHandler: Function;
}

const Card = (props: ICardProps) => {
  const { name, imageId, index, clickHandler } = props;
  const cardChosenHandler = () => {
    clickHandler(index);
  };
  return (
    <div
      className="card rounded-card border-none shadow-lg"
      data-testid={`item_${index}`}
      onClick={cardChosenHandler}
    >
      <CloudImage imageId={imageId} className={"img-fluid"} />
      <div className="card-body text-center">
        <div className="card-title">
          <h3 className="display-8 text-uppercase">{name}</h3>
        </div>
      </div>
    </div>
  );
};
const Cards = () => {
  const [allItems, setAllItems] = useState<{ [key: string]: string }>({});
  const state = useSelector((state: AppState) => state.selection) as ISelection;
  const { options, deck } = state;

  const dispatch = useDispatch();
  const setItemChosenHandler = (index: number) => {
    const winner = options && options[index];
    const looser = options && options[Number(Boolean(!index))];
    if (winner && looser) {
      dispatch(updateRankingMapAction({ winner, looser }));
    }
  };
  useEffect(() => {
    if (deck?.items) {
      setAllItems(deck.items);
    }
  }, [deck]);
  return (
    <div
      id="cards-section"
      className="text-center d-flex justify-content-between"
    >
      {options &&
        options.map((o: string, index: number) => (
          <Card
            name={o}
            imageId={allItems[o]}
            key={index.toString()}
            index={index.toString()}
            clickHandler={() => setItemChosenHandler(index)}
          />
        ))}
    </div>
  );
};

export default Cards;
