import { ICard } from "../state/selection/models/card";

const numberOfItemsPerSelection = 2;
const factorial = (n: number) => {
  let factorial = 1;
  if (n === 0 || n === 1) return factorial;

  for (let i = n; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
};

export const getTotalCountOfCombinations = (itemsLength: number) => {
  // find total number of combinations using formula
  // n = itemsLength!/(2!(itemsLength - 2)!)
  const count =
    factorial(itemsLength) /
    (factorial(numberOfItemsPerSelection) *
      factorial(itemsLength - numberOfItemsPerSelection));
  return count;
};

export class ShuffledArray extends Array {
  items: string[][];
  constructor(items: string[][]) {
    super();
    this.items = items;
  }
  randomSwap(arr: Array<string>) {
    const rnd = Math.floor(Math.random() * 2) + 1;
    return rnd === 1 ? arr : arr.reverse();
  }
  shuffle() {
    let len = this.items.length;
    let random: number;
    let temp: ICard[] | string[];
    while (len) {
      random = Math.floor(Math.random() * len--);
      temp = this.items[len];
      this.items[len] = this.items[random];
      this.items[random] = temp;
      this.items[len] = this.randomSwap(this.items[len]);
    }
    return this.items;
  }
}

// export default ShuffledArray;
