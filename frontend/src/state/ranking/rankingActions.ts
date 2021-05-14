import { Dispatch } from "redux";
import { AppState } from "../store";
import { UPDATE_ORDERED_ITEMS, UPDATE_RANKING_MAP } from "./models/actions";
import { IVote } from "./models/vote";

export const updateRankingMap = (rank: IVote) => ({
  type: UPDATE_RANKING_MAP,
  payload: rank,
});

export const updateOrderedItems = (ordered: string[]) => ({
  type: UPDATE_ORDERED_ITEMS,
  payload: ordered,
});

export function updateRankingMapAction(rank: IVote) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(updateRankingMap(rank));
  };
}

export function updateOrderedItemsAction(ordered: string[]) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(updateOrderedItems(ordered));
  };
}
