import { ADD_ITEM, DeckActionTypes } from "./models/actions";
import { IDeck } from "./models/deck";

// let items: IItem[] = [];
const initialState: IDeck = {};

export const deckReducer = (state = initialState, action: DeckActionTypes) => {
  switch (action.type) {
    case ADD_ITEM:
      const { name, imagePath } = action.payload;
      return { ...state, [name]: imagePath };
    default:
      return state;
  }
};
