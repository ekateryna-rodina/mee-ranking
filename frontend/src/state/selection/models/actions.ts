import { IDeck } from "../../deck/models/deck";

export const SHOW_NEW_OPTION = "SHOW_NEW_OPTION";
export const LOAD_DECK_INFO = "LOAD_DECK_INFO";
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
export const UPDATE_CURRENT_COUNTER = "UPDATE_CURRENT_COUNTER";

export interface ISetTotalCountAction {
  type: typeof SET_TOTAL_COUNT;
  payload: number;
}

export interface IOptionsAction {
  type: typeof SHOW_NEW_OPTION;
  payload: string[];
}

export interface ILoadDeckInfoAction {
  type: typeof LOAD_DECK_INFO;
  payload: IDeck;
}

export interface IUpdateCurrentCounterAction {
  type: typeof UPDATE_CURRENT_COUNTER;
}

export type SelectionActionTypes =
  | IOptionsAction
  | ILoadDeckInfoAction
  | ISetTotalCountAction
  | IUpdateCurrentCounterAction;
