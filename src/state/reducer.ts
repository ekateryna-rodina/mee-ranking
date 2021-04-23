import { combineReducers } from "redux";
import { rankingReducer } from "./ranking/rankingReducer";

const rootReducer = combineReducers({
  ranking: rankingReducer,
});

export default rootReducer;
