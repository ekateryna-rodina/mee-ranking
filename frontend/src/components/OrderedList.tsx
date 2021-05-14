import React from "react";
import ResultItem from "./ResultItem";

interface IOrderedListProps {
  ranked: boolean;
  items: string[];
}
const OrderedList = (props: IOrderedListProps) => {
  const { items, ranked } = props;
  //   console.log(ranked);
  //   const { orderedItems, items } = useSelector(
  //     (state: AppState) => state.ranking
  //   ) as IRanking;
  //   const grouped = ranked
  //     ? orderedItems
  //     : items.filter((i) => !orderedItems.includes(i));
  return (
    <>
      {items.map((i: string, index: number) => (
        <ResultItem key={index.toString()} name={i} ranked={ranked} />
      ))}
    </>
  );
};

export default OrderedList;
