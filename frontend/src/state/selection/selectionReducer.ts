import { PayloadAction } from "@reduxjs/toolkit";
import { IDeck } from "../deck/models/deck";
import {
  LOAD_DECK_INFO,
  SelectionActionTypes,
  SHOW_NEW_OPTION,
} from "./models/actions";
import { ISelection } from "./models/selection";

let deck: IDeck = {
  items: {},
  topic: {
    id: "",
    title: "",
  },
};
const initialState: ISelection = {
  options: null,
  index: 1,
  deck,
};

export const selectionReducer = (
  state = initialState,
  action: PayloadAction<SelectionActionTypes>
) => {
  switch (action.type) {
    case LOAD_DECK_INFO:
      return {
        ...state,
        deck: action.payload,
      };
    case SHOW_NEW_OPTION:
      return {
        options: action.payload,
        index: state.index + 1,
      };
    default:
      return state;
  }
};
