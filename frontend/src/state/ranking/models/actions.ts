import { IVote } from "./vote";

export const UPDATE_RANKING_MAP = "UPDATE_RANKING_MAP";
export const VOTE = "VOTE";
export const UPDATE_ORDERED_ITEMS = "UPDATE_ORDERED_ITEMS";

export interface IUpdateRankingAction {
  type: typeof UPDATE_RANKING_MAP;
  payload: string[];
}

export interface IUpdateOrderedItemsAction {
  type: typeof UPDATE_ORDERED_ITEMS;
  payload: string[];
}

export interface IVoteAction {
  type: typeof VOTE;
  payload: IVote;
}

export type RankingActionTypes =
  | IUpdateRankingAction
  | IVoteAction
  | IUpdateOrderedItemsAction;
