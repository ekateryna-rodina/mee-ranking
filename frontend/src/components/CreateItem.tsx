import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemAction } from "../state/deck/deckActions";

const CreateItem = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  const addToListHandler = (e: React.MouseEvent) => {
    dispatch(addItemAction({ name: item, imagePath: "" }));
    setItem("");
  };
  const onDropHandler = () => {};
  return (
    <div className="form-group">
      <label htmlFor="item">Item Name</label>
      <input
        className="form-control"
        type="text"
        id="item"
        value={item}
        data-testid="itemInput"
        onChange={(e) => setItem(e.target.value)}
      />

      <button data-testid="addToListButton" onClick={addToListHandler}>
        Add
      </button>
    </div>
  );
};

export default CreateItem;
