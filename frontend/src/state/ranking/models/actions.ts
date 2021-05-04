import { IVote } from "./vote";

export const UPDATE_RANKING_MAP = "UPDATE_RANKING_MAP";
export const VOTE = "VOTE";

export interface IUpdateRankingAction {
  type: typeof UPDATE_RANKING_MAP;
  payload: string[];
}

export interface IVoteAction {
  type: typeof VOTE;
  payload: IVote;
}

export type RankingActionTypes = IUpdateRankingAction | IVoteAction;
