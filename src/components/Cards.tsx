import React from "react";
import { useDispatch } from "react-redux";
import { updateRankingMapAction } from "../state/ranking/rankingActions";

interface CardsProps {
  items: string[];
}
const Cards = (props: CardsProps) => {
  const { items } = props;
  const dispatch = useDispatch();
  const setItemChosenHandler = (index: number) => {
    const winner = items[index];
    const looser = items[Number(Boolean(!index))];
    dispatch(updateRankingMapAction({ winner, looser }));
  };
  return (
    <div>
      {items &&
        items.map((item, index) => (
          <span
            key={item}
            data-testid={`item_` + index.toString()}
            onClick={() => setItemChosenHandler(index)}
          >
            {item}
          </span>
        ))}
    </div>
  );
};

export default Cards;
