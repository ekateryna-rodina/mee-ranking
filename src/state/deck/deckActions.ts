import { Dispatch } from "redux";
import { AppState } from "../store";
import { ADD_ITEM } from "./models/actions";
import { IItem } from "./models/item";

export const addItem = (item: IItem) => ({
  type: ADD_ITEM,
  payload: item,
});

export function addItemAction(item: IItem) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(addItem(item));
  };
}
