import React from "react";
import Ranking from "../components/Ranking";
import Result from "../components/Result";

const RankingPage = () => {
  console.log("ijefie");
  const libraryItems = [
    { name: "nemo", imagePath: require("../img/nemo.png") },
    { name: "incredibles", imagePath: require("../img/incredibles.png") },
    { name: "toy-story", imagePath: require("../img/toy-story.jpg") },
  ];
  return (
    <div id="content" className="h-100">
      <Ranking libraryItems={libraryItems} />
      <Result />
    </div>
  );
};

export default RankingPage;
