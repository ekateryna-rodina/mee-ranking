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
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addToListHandler}>Add</button>

      {libraryItems.length === 0 && <div>There are no items in the list</div>}
      {libraryItems.map((item, index) => (
        <div key={index.toString()}>{item}</div>
      ))}

      {libraryItems.length >= 2 && (
        <button onClick={() => setStartRanking(true)}>Start ranking</button>
      )}
    </>
  );
};

export default CreateLibrary;
