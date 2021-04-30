import React, { useState } from "react";
import Ranking from "./components/Ranking";

function App() {
  const [libraryItems, setLibraryItems] = useState<[]>([]);
  const [startRanking, setStartRanking] = useState<Boolean>(false);
  const [showResult, setShowResult] = useState<Boolean>(false);
  const [createLibrary, setCreateLibrary] = useState<Boolean>(true);

  return (
    <div className="h-100">
      {/* {createLibrary && (
        <CreateLibrary
          libraryItems={libraryItems}
          setLibraryItems={setLibraryItems}
          setStartRanking={setStartRanking}
        />
      )} */}
      {/* {startRanking && (
        <Ranking libraryItems={libraryItems} setShowResult={setShowResult} />
      )} */}
      <Ranking libraryItems={libraryItems} setShowResult={setShowResult} />
      {/* <Result /> */}
    </div>
  );
}

export default App;
