import { Dispatch } from "redux";
import { IDeck } from "../deck/models/deck";
import { AppState } from "../store";
import {
  LOAD_DECK_INFO,
  SET_TOTAL_COUNT,
  SHOW_NEW_OPTION,
  UPDATE_CURRENT_COUNTER,
} from "./models/actions";

export const showNewOptions = (options: string[]) => ({
  type: SHOW_NEW_OPTION,
  payload: options,
});

export const loadDeckInfo = (deck: IDeck) => ({
  type: LOAD_DECK_INFO,
  payload: deck,
});

export const setTotalCount = (count: number) => ({
  type: SET_TOTAL_COUNT,
  payload: count,
});

export const updateCurrentCounter = () => ({
  type: UPDATE_CURRENT_COUNTER,
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

export function setTotalCountAction(count: number) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(setTotalCount(count));
  };
}

export function updateCurrentCounterAction() {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(updateCurrentCounter());
  };
}
