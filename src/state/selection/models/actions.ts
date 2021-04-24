import { ISelection, IVote } from "./selection";

export const SHOW_NEW_OPTION = "SHOW_NEW_OPTION";
export const VOTE = "VOTE";

export interface IOptionsAction {
  type: typeof SHOW_NEW_OPTION;
  payload: ISelection;
}

export interface IVoteAction {
  type: typeof VOTE;
  payload: IVote;
}

export type SelectionActionTypes = IOptionsAction | IVoteAction;
