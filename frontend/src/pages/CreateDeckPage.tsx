import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CreateItem from "../components/CreateItem";
import CreateTopic from "../components/CreateTopic";
import { AppState } from "../state/store";
const CreateDeckPage = () => {
  const items = useSelector((state: AppState) => state.deck);
  const itemsLength = Object.keys(items).length;
  const history = useHistory();
  return (
    <div className="row">
      <div id="add-section" className="col-md-8">
        <div className="container">
          <CreateTopic />
          <CreateItem />
        </div>
      </div>
      <div id="list-section" className="col-md-4">
        {itemsLength === 0 && (
          <div data-testid="noItemsPlaceholder">
            There are no items in the list
          </div>
        )}
        <ul data-testid="votingItemsContainer" className="list-unstyled">
          {Object.keys(items).map((item) => (
            <li
              data-testid="itemL"
              key={item as string}
              className="list-inline-item"
            >
              {item}
            </li>
          ))}
        </ul>

        {itemsLength >= 2 && (
          <button onClick={() => history.push("/ranking")}>
            Start ranking
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateDeckPage;
