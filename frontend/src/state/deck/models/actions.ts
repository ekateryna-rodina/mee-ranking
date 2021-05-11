import { IItem } from "./item";

export const ADD_ITEM = "ADD_ITEM";
export const CREATE_TOPIC = "CREATE_TOPIC";

export interface IAddItemAction {
  type: typeof ADD_ITEM;
  payload: IItem;
}

export interface ICreateTopicAction {
  type: typeof CREATE_TOPIC;
  payload: {};
}

export type DeckActionTypes = IAddItemAction | ICreateTopicAction;
