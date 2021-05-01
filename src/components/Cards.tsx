import React from "react";
import { useDispatch } from "react-redux";
import pi2 from "../img/incredibles.png";
import pi1 from "../img/nemo.png";
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
    // <div id="cards-section" className="row text-center">
    <div
      id="cards-section"
      className="text-center d-flex justify-content-between"
    >
      {/* {items &&
          items.map((item, index) => (
            <div
              className="card"
              key={item}
              data-testid={`item_` + index.toString()}
              onClick={() => setItemChosenHandler(index)}
            >
              <div className="card-body">
                <div className="card-title">{item}</div>
              </div>
            </div>
          ))} */}

      {/* <h1 className="text-uppercase mb-5">Which pixar movie is better?</h1>
      <div className="col-md-6">
        <div className="card rounded-card w-50 mb-3 mx-auto my-auto border-none shadow-lg">
          <img src={pi1} alt="" className="img-fluid" />
          <div className="card-body text-center">
            <div className="card-title">
              <h3 className="display-8 text-uppercase">finding nemo</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card rounded-card w-50 mb-3 mx-auto my-auto border-none shadow-lg">
          <img src={pi2} alt="" className="img-fluid" />
          <div className="card-body text-center">
            <div className="card-title">
              <h3 className="display-8 text-uppercase">toy story</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); */}

      <div className="card rounded-card mb-3 border-none shadow-lg">
        <img src={pi1} alt="" className="img-fluid" />
        <div className="card-body text-center">
          <div className="card-title">
            <h3 className="display-8 text-uppercase">finding nemo</h3>
          </div>
        </div>
      </div>
      <div className="card rounded-card mb-3  border-none shadow-lg">
        <img src={pi2} alt="" className="img-fluid" />
        <div className="card-body text-center">
          <div className="card-title">
            <h3 className="display-8 text-uppercase">toy story</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
