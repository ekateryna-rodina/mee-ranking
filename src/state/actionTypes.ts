import { ControlsActionTypes } from "./controls/models/actions";
import { DeckActionTypes } from "./deck/models/actions";
import { RankingActionTypes } from "./ranking/models/actions";
import { SelectionActionTypes } from "./selection/models/actions";

export type AppActionTypes =
  | RankingActionTypes
  | SelectionActionTypes
  | ControlsActionTypes
  | DeckActionTypes;
