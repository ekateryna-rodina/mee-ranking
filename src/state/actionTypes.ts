import { RankingActionTypes } from "./ranking/models/actions";
import { SelectionActionTypes } from "./selection/models/actions";

export type AppActionTypes = RankingActionTypes | SelectionActionTypes;
