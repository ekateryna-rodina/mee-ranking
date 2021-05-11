import { ICard } from "../state/selection/models/card";

class ShuffledArray extends Array {
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

export default ShuffledArray;
