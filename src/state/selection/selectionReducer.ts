import { PayloadAction } from "@reduxjs/toolkit";
import { SelectionActionTypes, SHOW_NEW_OPTION } from "./models/actions";

const initialState = {
  options: null,
  index: 1,
};

export const selectionReducer = (
  state = initialState,
  action: PayloadAction<SelectionActionTypes>
) => {
  switch (action.type) {
    case SHOW_NEW_OPTION:
      return {
        options: action.payload,
        index: state.index + 1,
      };
    default:
      return state;
  }
};
