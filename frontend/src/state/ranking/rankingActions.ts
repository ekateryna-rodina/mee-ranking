import { Dispatch } from "redux";
import { AppState } from "../store";
import { UPDATE_RANKING_MAP } from "./models/actions";
import { IVote } from "./models/vote";

export const updateRankingMap = (rank: IVote) => ({
  type: UPDATE_RANKING_MAP,
  payload: rank,
});

export function updateRankingMapAction(rank: IVote) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(updateRankingMap(rank));
  };
}
