import { PayloadAction } from "@reduxjs/toolkit";
import { IDeck } from "../deck/models/deck";
import {
  LOAD_DECK_INFO,
  SelectionActionTypes,
  SET_TOTAL_COUNT,
  SHOW_NEW_OPTION,
  UPDATE_CURRENT_COUNTER,
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
  totalCount: 0,
  options: [],
  counter: 0,
  deck,
};

export const selectionReducer = (
  state = initialState,
  action: PayloadAction<SelectionActionTypes>
) => {
  switch (action.type) {
    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalCount: action.payload,
      };
    }
    case LOAD_DECK_INFO:
      return {
        ...state,
        deck: action.payload,
      };
    case SHOW_NEW_OPTION:
      console.log("show new options");
      return {
        ...state,
        options: action.payload,
      };
    case UPDATE_CURRENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};
