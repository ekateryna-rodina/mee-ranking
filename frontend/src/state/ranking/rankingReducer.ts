import { PayloadAction } from "@reduxjs/toolkit";
import { UPDATE_ORDERED_ITEMS, UPDATE_RANKING_MAP } from "./models/actions";
import { IRankingMap } from "./models/rankingMap";
import IRanking from "./models/result";
import { IVote } from "./models/vote";
let map: IRankingMap = {};
// dependecies of winner and loosers
let deps: string[][] = [];
let orderedItems: string[] = [];
const initialState: IRanking = {
  rankingMap: map,
  deps,
  orderedItems,
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
      const newDeps: string[] = [looser, winner];
      const newState = {
        ...state,
        rankingMap: newRankingMap,
        deps: [...state.deps, newDeps],
      };
      return newState;
    case UPDATE_ORDERED_ITEMS:
      return {
        ...state,
        orderedItems: action.payload,
      };
    default:
      return state;
  }
};
