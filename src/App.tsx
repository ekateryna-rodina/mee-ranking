import React, { useState } from "react";
import Ranking from "./components/Ranking";

function App() {
  const [libraryItems, setLibraryItems] = useState<[]>([]);
  const [startRanking, setStartRanking] = useState<Boolean>(false);
  const [showResult, setShowResult] = useState<Boolean>(false);
  const [createLibrary, setCreateLibrary] = useState<Boolean>(true);

  return (
    <div id="content" className="h-100">
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
      {/* <div className="container h-100 d-flex d-flex-column justify-content-center align-items-center bg-danger">
        <div style={{ height: "50%" }}>
          <progress max="100" value="85"></progress>
          <div>hello</div>
        </div>
      </div> */}

      <Ranking libraryItems={libraryItems} setShowResult={setShowResult} />
      {/* <Result /> */}
    </div>
  );
}

export default App;
