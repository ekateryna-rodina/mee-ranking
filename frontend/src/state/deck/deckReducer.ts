import { ADD_ITEM, CREATE_TOPIC, DeckActionTypes } from "./models/actions";
import { IDeck, ITopic } from "./models/deck";

let topic: ITopic = {
  id: "",
  title: "",
};
const initialState: IDeck = {
  items: {},
  topic,
};

export const deckReducer = (state = initialState, action: DeckActionTypes) => {
  switch (action.type) {
    case CREATE_TOPIC:
      return { ...state, topic: action.payload };
    case ADD_ITEM:
      const { name, imagePath } = action.payload;
      return { ...state, items: { ...state.items, [name]: imagePath } };
    default:
      return state;
  }
};
