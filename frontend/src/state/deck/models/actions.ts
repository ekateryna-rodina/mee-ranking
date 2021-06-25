import { ImageStyle, LabelPosition } from "./item";

export const INIT_ALL = "INIT_ALL";
export const ADD_ITEM = "ADD_ITEM";
export const CREATE_TOPIC = "CREATE_TOPIC";
export const EDIT_TOPIC = "EDIT_TOPIC";
export const EDIT_IMAGE_PATH = "EDIT_IMAGE_PATH";
export const EDIT_ITEM_NAME = "EDIT_ITEM_NAME";
export const EDIT_ITEM_COLOR = "EDIT_ITEM_COLOR";
export const EDIT_ITEM_TRANSPARENCY = "EDIT_ITEM_TRANSPARENCY";
export const EDIT_LABEL_POSITION = "EDIT_LABEL_POSITION";
export const EDIT_IMAGE_STYLE = "EDIT_IMAGE_STYLE";

export interface IAddItemAction {
  type: typeof ADD_ITEM;
  payload: { itemId: string; name: string };
}

export interface IEditItemImagePathAction {
  type: typeof EDIT_IMAGE_PATH;
  payload: { itemId: string; imagePath: string };
}

export interface IEditItemNameAction {
  type: typeof EDIT_ITEM_NAME;
  payload: { itemId: string; name: string };
}

export interface IEditItemColorAction {
  type: typeof EDIT_ITEM_COLOR;
  payload: { itemId: string; color: boolean };
}

export interface IEditItemTransparencyAction {
  type: typeof EDIT_ITEM_TRANSPARENCY;
  payload: { itemId: string; transparency: boolean };
}

export interface IEditItemLabelPositionAction {
  type: typeof EDIT_LABEL_POSITION;
  payload: { itemId: string; labelPosition: LabelPosition };
}

export interface IEditItemImageStyleAction {
  type: typeof EDIT_IMAGE_STYLE;
  payload: { itemId: string; imageStyle: ImageStyle };
}

export interface ICreateTopicAction {
  type: typeof CREATE_TOPIC;
  payload: { id: string; title: string };
}

export type DeckActionTypes =
  | IAddItemAction
  | ICreateTopicAction
  | IEditItemImagePathAction
  | IEditItemNameAction
  | IEditItemImageStyleAction
  | IEditItemLabelPositionAction
  | IEditItemColorAction
  | IEditItemTransparencyAction;
