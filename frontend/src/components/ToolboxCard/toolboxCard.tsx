import React from "react";
import { LabelPosition } from "../../state/deck/models/item";

const CARD_SIZE_RATIO = 1.62;
// const CARD_BORDER_RADIUS_RATIO =
// TODO: move to the state

interface IToolboxCardProps {
  width: number;
  labelPosition: LabelPosition | string;
  isSelected: boolean;
}

const ToolboxCard = (props: IToolboxCardProps) => {
  const { width, labelPosition, isSelected } = props;
  const height = width * CARD_SIZE_RATIO;
  const labelContainerHeight = height * 0.33333;
  console.log(labelPosition);
  const labelPositionFlexClass = {
    Top: "start",
    Center: "center",
    Bottom: "end",
    None: "center",
  };
  const labelContainerBorderRadius = {
    Top: "0.7em 0.7em 0 0",
    Center: "0",
    Bottom: "0 0 0.7em 0.7em",
  };
  return (
    <div
      className={`d-flex flex-column justify-content-${labelPositionFlexClass[labelPosition]} align-items-center`}
      style={{
        width,
        height,
        backgroundColor: "#161F2E",
        borderRadius: "0.7em",
        border: isSelected ? "1px solid #FFFFFF" : "",
      }}
    >
      {labelPosition !== "None" && (
        <div
          style={{
            width,
            height: labelContainerHeight,
            backgroundColor: isSelected ? "#FFFFFF" : "#2F3C51",
            borderRadius: labelContainerBorderRadius[labelPosition],
          }}
        ></div>
      )}
      {labelPosition === "None" && (
        <i
          className="fas fa-ban fa-3x"
          style={{ color: isSelected ? "#FFFFFF" : "#2F3C51" }}
        ></i>
      )}
    </div>
  );
};

export default ToolboxCard;
