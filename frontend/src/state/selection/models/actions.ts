import { IDeck } from "../../deck/models/deck";

export const SHOW_NEW_OPTION = "SHOW_NEW_OPTION";
export const LOAD_DECK_INFO = "LOAD_DECK_INFO";

export interface IOptionsAction {
  type: typeof SHOW_NEW_OPTION;
  payload: string[];
}

export interface ILoadDeckInfoAction {
  type: typeof LOAD_DECK_INFO;
  payload: IDeck;
}

export type SelectionActionTypes = IOptionsAction | ILoadDeckInfoAction;
