import React, { useState } from "react";
import CreateLibrary from "./components/CreateLibrary";
import Ranking from "./components/Ranking";
import Result from "./components/Result";

function App() {
  const [libraryItems, setLibraryItems] = useState<string[]>([]);
  const [rankingResult, setRankingResult] = useState<{}>({});
  const [startRanking, setStartRanking] = useState<Boolean>(false);
  const [showResult, setShowResult] = useState<Boolean>(false);
  const [createLibrary, setCreateLibrary] = useState<Boolean>(true);

  return (
    <>
      {createLibrary && (
        <CreateLibrary
          libraryItems={libraryItems}
          setLibraryItems={setLibraryItems}
          setStartRanking={setStartRanking}
        />
      )}
      {startRanking && (
        <Ranking
          libraryItems={libraryItems}
          setShowResult={setShowResult}
          setRankingResult={setRankingResult}
          rankingResult={rankingResult}
        />
      )}
      {showResult && <Result rankingResult={rankingResult} />}
    </>
  );
}

export default App;
