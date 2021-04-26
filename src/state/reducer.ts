import { combineReducers } from "redux";
import { rankingReducer } from "./ranking/rankingReducer";
import { selectionReducer } from "./selection/selectionReducer";

const rootReducer = combineReducers({
  ranking: rankingReducer,
  selection: selectionReducer,
});

export default rootReducer;
