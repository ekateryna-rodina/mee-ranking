import React from "react";

interface ResultItemProps {
  name: string;
  imagePath: string;
  score?: number;
}
const ResultItem = (props: ResultItemProps) => {
  const { name, imagePath, score } = props;
  const imageSrc = require("../img/nemo.png").default;
  return (
    <div
      id="resultItem"
      data-testid="item-test-id"
      className="d-flex justify-content-between align-items-center bg-white rounded mb-2 px-1"
    >
      <div className="d-flex d-flex-inline justify-content-start align-items-center">
        <img
          src={imageSrc}
          width="30"
          height="30"
          alt=""
          className="rounded-circle mx-1"
        />
        <span className="text-uppercase">{name}</span>
      </div>

      <span className="flex-fixed-width-item px-sm-2 border-start">
        {score}
      </span>
    </div>
  );
};

export default ResultItem;
