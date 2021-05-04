import { Dispatch } from "redux";
import { AppState } from "../store";
import { TOGGLE_RESULT } from "./models/actions";

export const toggleResult = () => ({
  type: TOGGLE_RESULT,
});

export function toggleResultAction() {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(toggleResult());
  };
}
