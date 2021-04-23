import React, { useState } from "react";
import { Provider } from "react-redux";
import CreateLibrary from "./components/CreateLibrary";
import Ranking from "./components/Ranking";
import Result from "./components/Result";
import store from "./state/store";

function App() {
  const [libraryItems, setLibraryItems] = useState<[]>([]);
  const [rankingResult, setRankingResult] = useState<{}>({});
  const [startRanking, setStartRanking] = useState<Boolean>(false);
  const [showResult, setShowResult] = useState<Boolean>(false);
  const [createLibrary, setCreateLibrary] = useState<Boolean>(true);

  return (
    <Provider store={store}>
      <div>learn react</div>
      {createLibrary && (
        <CreateLibrary
          libraryItems={libraryItems}
          setLibraryItems={setLibraryItems}
          setStartRanking={setStartRanking}
        />
      )}
      {startRanking && (
        <Ranking libraryItems={libraryItems} setShowResult={setShowResult} />
      )}
      {showResult && <Result rankingResult={rankingResult} />}
    </Provider>
  );
}

export default App;
