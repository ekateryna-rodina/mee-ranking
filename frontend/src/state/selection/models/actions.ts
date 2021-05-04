export const SHOW_NEW_OPTION = "SHOW_NEW_OPTION";

export interface IOptionsAction {
  type: typeof SHOW_NEW_OPTION;
  payload: string[];
}

export type SelectionActionTypes = IOptionsAction;
