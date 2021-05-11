import { Dispatch } from "redux";
import { IDeck } from "../deck/models/deck";
import { AppState } from "../store";
import { LOAD_DECK_INFO, SHOW_NEW_OPTION } from "./models/actions";

export const showNewOptions = (options: string[]) => ({
  type: SHOW_NEW_OPTION,
  payload: options,
});

export const loadDeckInfo = (deck: IDeck) => ({
  type: LOAD_DECK_INFO,
  payload: deck,
});

export function showNewOptionsAction(options: string[]) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(showNewOptions(options));
  };
}

export function loadDeckInfoAction(deck: IDeck) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(loadDeckInfo(deck));
  };
}
