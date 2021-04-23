import React from "react";

interface CardsProps {
  items: string[];
  setItemChosen: Function;
}
const Cards = (props: CardsProps) => {
  const { items, setItemChosen } = props;
  return (
    <div>
      {items.map((item, index) => (
        <span
          key={item}
          data-testid={`item_` + index.toString()}
          onClick={() => setItemChosen(index)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Cards;
