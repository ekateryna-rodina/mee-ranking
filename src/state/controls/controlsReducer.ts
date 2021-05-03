import { PayloadAction } from "@reduxjs/toolkit";
import { TOGGLE_RESULT } from "./models/actions";
import { IControl } from "./models/control";

const initialState: IControl = {
  showResult: false,
  showSettings: false,
};

export const controlsReducer = (
  state = initialState,
  action: PayloadAction
) => {
  console.log(action.type);
  switch (action.type) {
    case TOGGLE_RESULT:
      const currentState = state.showResult;
      return {
        ...state,
        showResult: !currentState,
      };
    default:
      return state;
  }
};
