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

export interface IItem {
  name: string;
  imagePath?: string | string[];
  settings?: ICardLayoutSettings;
}
