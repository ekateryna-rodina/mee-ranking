import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addItemAction } from "../state/deck/deckActions";
import { AppState } from "../state/store";

const CreateLibrary = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  const items = useSelector((state: AppState) => state.deck);
  const itemsLength = Object.keys(items).length;
  const history = useHistory();
  const addToListHandler = (e: React.MouseEvent) => {
    dispatch(addItemAction({ name: item, imagePath: "" }));
    setItem("");
  };
  return (
    <>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          value={item}
          data-testid="itemInput"
          onChange={(e) => setItem(e.target.value)}
        />
        <button data-testid="addToListButton" onClick={addToListHandler}>
          Add
        </button>
      </div>

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
        <button onClick={() => history.push("/ranking")}>Start ranking</button>
      )}
    </>
  );
};

export default CreateLibrary;

// mx-auto
// w-25 w-50
