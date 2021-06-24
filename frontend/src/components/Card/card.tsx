import React from "react";

const RATIO = 1.62;
// TODO: move to the state
export enum LabelPosition {
  Top,
  Center,
  Bottom,
  None,
}

export enum ImageStyle {
  Flat,
  Parallax,
  None,
}

export interface ICardLayoutSettings {
  labelStyle: {
    color: boolean;
    transparency: boolean;
    position: LabelPosition;
  };
  imageStyle: ImageStyle;
}

interface ICardProps {
  width: number;
  isLayout: boolean;
  settings: ICardLayoutSettings;
}

const Card = (props: ICardProps) => {
  const { width, isLayout, settings } = props;
  const height = width * RATIO;

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "bisque",
        borderRadius: "0.2em",
      }}
    ></div>
  );
};

export default Card;
