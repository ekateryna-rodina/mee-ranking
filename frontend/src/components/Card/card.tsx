import React from "react";
import { ICardLayoutSettings } from "../../state/deck/models/item";

const CARD_SIZE_RATIO = 1.62;
// const CARD_BORDER_RADIUS_RATIO =
// TODO: move to the state

interface ICardProps {
  width: number;
  settings?: ICardLayoutSettings;
}

const Card = (props: ICardProps) => {
  const { width, settings } = props;
  const height = width * CARD_SIZE_RATIO;

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "black",
        borderRadius: "1.2em",
      }}
    ></div>
  );
};

export default Card;
