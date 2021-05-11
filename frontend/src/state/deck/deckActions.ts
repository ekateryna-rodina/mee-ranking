import { Dispatch } from "redux";
import { AppState } from "../store";
import { ADD_ITEM, CREATE_TOPIC } from "./models/actions";
import { IItem } from "./models/item";

export const createTopic = (topic: { id: string; title: string }) => ({
  type: CREATE_TOPIC,
  payload: topic,
});

export const addItem = (item: IItem) => ({
  type: ADD_ITEM,
  payload: item,
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
