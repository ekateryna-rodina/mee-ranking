import { IItem } from "./item";

export const ADD_ITEM = "ADD_ITEM";

export interface IAddItemAction {
  type: typeof ADD_ITEM;
  payload: IItem;
}

export type DeckActionTypes = IAddItemAction;
