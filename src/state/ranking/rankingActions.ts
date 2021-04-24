import { Dispatch } from "redux";
import { AppState } from "../store";
import { UPDATE_RANKING_MAP } from "./models/actions";

export const updateRankingMap = (rank: string[]) => ({
  type: UPDATE_RANKING_MAP,
  payload: rank,
});

export function updateRankingMapAction(rank: string[]) {
  console.log("fdff");
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(updateRankingMap(rank));
  };
}
