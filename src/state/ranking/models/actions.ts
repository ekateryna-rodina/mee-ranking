export const UPDATE_RANKING_MAP = "UPDATE_RANKING_MAP";

export interface IUpdateRankingAction {
  type: typeof UPDATE_RANKING_MAP;
  payload: string[];
}

export type RankingActionTypes = IUpdateRankingAction;
