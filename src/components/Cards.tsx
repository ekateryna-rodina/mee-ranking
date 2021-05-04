import React from "react";
import { useDispatch } from "react-redux";
import { updateRankingMapAction } from "../state/ranking/rankingActions";
import { ICard } from "../state/selection/models/card";

interface ICardsProps {
  items: ICard[];
}
interface ICardProps {
  name: string;
  imagePath: any;
  index: string;
  clickHandler: Function;
}

const Card = (props: ICardProps) => {
  const { name, imagePath, index, clickHandler } = props;
  const imageSrc = imagePath.default;
  const cardChosenHandler = () => {
    clickHandler(index);
  };
  return (
    <div
      className="card rounded-card border-none shadow-lg"
      data-testId={`item_${index}`}
      onClick={cardChosenHandler}
    >
      <img src={imageSrc} alt="" className="img-fluid" />
      <div className="card-body text-center">
        <div className="card-title">
          <h3 className="display-8 text-uppercase">{name}</h3>
        </div>
      </div>
    </div>
  );
};
const Cards = (props: ICardsProps) => {
  const { items } = props;
  const dispatch = useDispatch();
  const setItemChosenHandler = (index: number) => {
    console.log(index);
    const winner = items[index].name;
    const looser = items[Number(Boolean(!index))].name;
    dispatch(updateRankingMapAction({ winner, looser }));
  };
  return (
    <div
      id="cards-section"
      className="text-center d-flex justify-content-between"
    >
      {items &&
        items.map((item, index) => (
          <Card
            name={item.name}
            imagePath={item.imagePath}
            key={item.name}
            index={index.toString()}
            clickHandler={() => setItemChosenHandler(index)}
          />
          // <div
          //   className="card"
          //   key={item.name}
          //   data-testid={`item_` + index.toString()}
          //   onClick={() => setItemChosenHandler(index)}
          // >
          //   <div className="card-body">
          //     <div className="card-title">{item}</div>
          //   </div>
          // </div>
        ))}
    </div>
  );
};

export default Cards;
