import React, { useState } from "react";
import CreateLibrary from "./components/CreateLibrary";
import Ranking from "./components/Ranking";

function App() {
  const [libraryItems, setLibraryItems] = useState<string[]>([]);
  const [startRanking, setStartRanking] = useState<Boolean>(false);
  return (
    <>
      {!startRanking && (
        <CreateLibrary
          libraryItems={libraryItems}
          setLibraryItems={setLibraryItems}
          setStartRanking={setStartRanking}
        />
      )}
      {startRanking && <Ranking libraryItems={libraryItems} />}
    </>
  );
}

export default App;
