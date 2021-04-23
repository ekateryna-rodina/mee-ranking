import React, { useState } from "react";

interface CreateLibraryProps {
  libraryItems: string[];
  setLibraryItems: Function;
  setStartRanking: Function;
}
const CreateLibrary = (props: CreateLibraryProps) => {
  const { libraryItems, setLibraryItems, setStartRanking } = props;
  const [item, setItem] = useState("");
  const addToListHandler = (e: React.MouseEvent) => {
    setLibraryItems([...libraryItems, item]);
    setItem("");
  };
  return (
    <>
      <input
        type="text"
        value={item}
        data-testid="itemInput"
        onChange={(e) => setItem(e.target.value)}
      />
      <button data-testid="addToListButton" onClick={addToListHandler}>
        Add
      </button>

      {libraryItems.length === 0 && (
        <div data-testid="noItemsPlaceholder">
          There are no items in the list
        </div>
      )}
      <ul data-testid="votingItemsContainer">
        {libraryItems.map((item) => (
          <li data-testid="itemL" key={item as string}>
            {item}
          </li>
        ))}
      </ul>

      {libraryItems.length >= 2 && (
        <button onClick={() => setStartRanking(true)}>Start ranking</button>
      )}
    </>
  );
};

export default CreateLibrary;
