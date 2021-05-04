import { combineReducers } from "redux";
import { controlsReducer } from "./controls/controlsReducer";
import { deckReducer } from "./deck/deckReducer";
import { rankingReducer } from "./ranking/rankingReducer";
import { selectionReducer } from "./selection/selectionReducer";

const rootReducer = combineReducers({
  ranking: rankingReducer,
  selection: selectionReducer,
  controls: controlsReducer,
  deck: deckReducer,
});

export default rootReducer;
