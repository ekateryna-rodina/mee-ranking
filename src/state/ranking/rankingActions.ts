import { Dispatch } from "redux";
import { AppState } from "../store";
import { UPDATE_RANKING_MAP } from "./models/actions";

export const updateRankingMap = (rank: { [key: string]: {} }) => ({
  type: UPDATE_RANKING_MAP,
  payload: rank,
});

export function updateRankingMapAction(rank: { [key: string]: {} }) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(updateRankingMap(rank));
  };
}
