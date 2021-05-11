import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CreateItem from "../components/CreateItem";
import CreateTopic from "../components/CreateTopic";
import Deck from "../components/Deck";
import { AppState } from "../state/store";
const CreateDeckPage = () => {
  const history = useHistory();
  const state = useSelector((state: AppState) => state.deck);
  const { items } = state;
  return (
    <div className="row">
      <div id="add-section" className="col-md-8">
        <div className="container">
          <CreateTopic />
          <CreateItem />
        </div>
      </div>
      <div id="list-section" className="col-md-4">
        <Deck />
        <button
          className={`btn btn-primary ${
            Object.keys(items).length < 2 ? "disabled" : ""
          }`}
          onClick={() => history.push("/ranking")}
        >
          Start ranking
        </button>
      </div>
    </div>
  );
};

export default CreateDeckPage;
