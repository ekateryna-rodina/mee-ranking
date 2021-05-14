import { IRankingMap } from "./rankingMap";

export default interface IRanking {
  rankingMap: IRankingMap;
  deps: string[][];
  orderedItems: string[];
}
