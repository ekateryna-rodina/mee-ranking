import { IDeck } from "../../deck/models/deck";

export interface ISelection {
  options: string[] | null;
  index: number;
  deck: IDeck;
}
