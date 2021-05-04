import { PayloadAction } from "@reduxjs/toolkit";
import { UPDATE_RANKING_MAP } from "./models/actions";
import { IRankingMap } from "./models/rankingMap";
import { IVote } from "./models/vote";
let map: IRankingMap = {};
let deps: string[][] = [];
let items: string[] = [];
const initialState = {
  rankingMap: map,
  items,
  deps,
};

export const rankingReducer = (
  state = initialState,
  action: PayloadAction<IVote>
) => {
  switch (action.type) {
    case UPDATE_RANKING_MAP:
      const { winner, looser } = action.payload;
      const newRankingMap = {
        ...state.rankingMap,
        [winner]: { ...state.rankingMap[winner], [looser]: 1 },
        [looser]: { ...state.rankingMap[looser], [winner]: 0 },
      };
      const items = newRankingMap ? Object.keys(newRankingMap) : [];
      state.deps.push([looser, winner]);
      return {
        ...state,
        rankingMap: newRankingMap,
        items,
      };
    default:
      return state;
  }
};
