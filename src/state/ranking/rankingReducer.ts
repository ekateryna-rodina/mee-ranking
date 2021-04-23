import { PayloadAction } from "@reduxjs/toolkit";
import { UPDATE_RANKING_MAP } from "./models/actions";
import { IRankingMap } from "./models/rankingMap";

const initialState: IRankingMap = {};

export const rankingReducer = (
  state = initialState,
  action: PayloadAction<IRankingMap>
) => {
  switch (action.type) {
    case UPDATE_RANKING_MAP:
      return {
        ...state,
        something: action.payload,
      };
    default:
      return state;
  }
};
