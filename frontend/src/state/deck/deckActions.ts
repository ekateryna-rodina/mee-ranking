import { Dispatch } from "redux";
import { AppState } from "../store";
import {
  ADD_ITEM,
  CREATE_TOPIC,
  EDIT_IMAGE_PATH,
  EDIT_IMAGE_STYLE,
  EDIT_ITEM_COLOR,
  EDIT_ITEM_NAME,
  EDIT_ITEM_TRANSPARENCY,
  EDIT_LABEL_POSITION,
  EDIT_TOPIC,
} from "./models/actions";
import { IItem, ImageStyle, LabelPosition } from "./models/item";

export const createTopic = (topic: { id: string; title: string }) => ({
  type: CREATE_TOPIC,
  payload: topic,
});

export const editTopic = (topic: { id: string; title: string }) => ({
  type: EDIT_TOPIC,
  payload: topic,
});

export const addItem = (item: IItem) => ({
  type: ADD_ITEM,
  payload: item,
});

export const editImage = (data: { itemId: string; imagePath: string }) => ({
  type: EDIT_IMAGE_PATH,
  payload: data,
});

export const editItemName = (data: { itemId: string; name: string }) => ({
  type: EDIT_ITEM_NAME,
  payload: data,
});

export const editItemColor = (data: { itemId: string; color: boolean }) => ({
  type: EDIT_ITEM_COLOR,
  payload: data,
});

export const editItemTransparency = (data: {
  itemId: string;
  transparency: boolean;
}) => ({
  type: EDIT_ITEM_TRANSPARENCY,
  payload: data,
});

export const editLabelPosition = (data: {
  itemId: string;
  labelPosition: LabelPosition;
}) => ({
  type: EDIT_LABEL_POSITION,
  payload: data,
});

export const ediImageStyle = (data: {
  itemId: string;
  imageStyle: ImageStyle;
}) => ({
  type: EDIT_IMAGE_STYLE,
  payload: data,
});

export function addItemAction(item: IItem) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(addItem(item));
  };
}

export function createTopicAction(topic: { id: string; title: string }) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(createTopic(topic));
  };
}

export function editTopicAction(topic: { id: string; title: string }) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(editTopic(topic));
  };
}

export function editImageAction(data: { itemId: string; imagePath: string }) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(editImage(data));
  };
}

export function editItemNameAction(data: { itemId: string; name: string }) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(editItemName(data));
  };
}

export function editItemColorAction(data: { itemId: string; color: boolean }) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(editItemColor(data));
  };
}

export function editItemTransparencyAction(data: {
  itemId: string;
  transparency: boolean;
}) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(editItemTransparency(data));
  };
}

export function editItemLabelPositionAction(data: {
  itemId: string;
  labelPosition: LabelPosition;
}) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(editLabelPosition(data));
  };
}

export function editItemImageStyleAction(data: {
  itemId: string;
  imageStyle: ImageStyle;
}) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(ediImageStyle(data));
  };
}
