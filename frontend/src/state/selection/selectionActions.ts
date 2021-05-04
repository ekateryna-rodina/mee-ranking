import { Dispatch } from "redux";
import { AppState } from "../store";
import { SHOW_NEW_OPTION } from "./models/actions";

export const showNewOptions = (options: string[]) => ({
  type: SHOW_NEW_OPTION,
  payload: options,
});

export function showNewOptionsAction(options: string[]) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(showNewOptions(options));
  };
}
