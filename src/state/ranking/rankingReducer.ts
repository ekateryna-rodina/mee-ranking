import { PayloadAction } from "@reduxjs/toolkit";
import { UPDATE_RANKING_MAP } from "./models/actions";
import { IRankingMap } from "./models/rankingMap";

const initialState: IRankingMap = {};

export const rankingReducer = (
  state = initialState,
  action: PayloadAction<string[]>
) => {
  //   const [winner, looser] = action.payload;
  switch (action.type) {
    case UPDATE_RANKING_MAP:
      return {
        ...state,
        // [winner]: { ...state[winner], [looser]: 1 },
        // [looser]: { ...state[looser], [winner]: 0 },
      };
    default:
      return state;
  }
};
