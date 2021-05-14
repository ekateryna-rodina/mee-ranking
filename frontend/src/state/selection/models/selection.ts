import { IDeck } from "../../deck/models/deck";

export interface ISelection {
  totalCount: number;
  options: string[] | null;
  counter: number;
  deck: IDeck;
}
