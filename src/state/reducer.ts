import { combineReducers } from "redux";
import { controlsReducer } from "./controls/controlsReducer";
import { rankingReducer } from "./ranking/rankingReducer";
import { selectionReducer } from "./selection/selectionReducer";

const rootReducer = combineReducers({
  ranking: rankingReducer,
  selection: selectionReducer,
  controls: controlsReducer,
});

export default rootReducer;
