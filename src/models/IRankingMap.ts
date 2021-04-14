// export interface IRankingMap {
//   [key: string]: {
//     origRank: number;
//     pairs: {
//       [key: string]: number;
//     };
//   };
// }

export interface IRankingMap {
  [key: string]: {
    [key: string]: number;
  };
}
