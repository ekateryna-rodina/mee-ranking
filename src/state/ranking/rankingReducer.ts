import { PayloadAction } from "@reduxjs/toolkit";
import { UPDATE_RANKING_MAP } from "./models/actions";
import { IRankingMap } from "./models/rankingMap";
import { IVote } from "./models/vote";
let map: IRankingMap = {};
const initialState = {
  rankingMap: map,
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
      console.log(newRankingMap);
      return {
        rankingMap: newRankingMap,
      };
    default:
      return state;
  }
};
