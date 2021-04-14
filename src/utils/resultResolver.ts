import { IRankingMap } from "../models/IRankingMap";

type NodeData = {
  [key: string]: number;
};
class Node {
  data: { [key: string]: number } | null;
  next: Node | null;
  prev: Node | null;
  constructor(data: NodeData, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

export class ResultResolver {
  rankingResult: IRankingMap;
  scores: [name: string, score: number][];
  constructor(
    rankingResult: IRankingMap,
    scores: [name: string, score: number][]
  ) {
    this.rankingResult = rankingResult;
    this.scores = scores;
  }
  sortLinkedList(nodeToInsert: Node, head: Node) {
    const newLinkedListPointer = new Node({ pointer: 0 });
    let current = newLinkedListPointer;
    current.next = head;
    head.prev = current;

    while (
      head &&
      this.rankingResult[Object.keys(nodeToInsert.data!)[0]][
        Object.keys(head.data!)[0]
      ] === 1
    ) {
      if (!head.next) {
        // insert in the end
        head.next = nodeToInsert;
        return newLinkedListPointer.next;
      }

      head = head.next;
    }

    // insert between previous and head
    nodeToInsert.next = head;
    head.prev!.next = nodeToInsert;
    return newLinkedListPointer.next;
  }

  resolve() {
    const result = [];
    // find a max
    // create bucket array
    // pop from seq and insert into bucket array
    // for same scores indeces create a linked list
    // while inserting in linked list - perform comparison
    // extract from bucket list into new list
    if (this.scores.length === 0) {
      return [];
    }

    const sequence = this.scores.map(
      (s: [name: string, score: number]) => s[1]
    );
    const max = Math.max(...sequence);
    const bucketArray = Array(max).fill(null);
    while (this.scores.length > 0) {
      const item = this.scores.pop();
      const indexToInsert = item![1] - 1;
      const nodeData: NodeData = {
        [item![0]]: item![1],
      };
      const node = new Node(nodeData);
      if (!bucketArray[indexToInsert]) {
        // insert node into array
        bucketArray[indexToInsert] = node;
      } else {
        // if linked list do exist -> for each and perform local ranking
        // head -> smallest rank
        const head = this.sortLinkedList(node, bucketArray[indexToInsert]);
        bucketArray[indexToInsert] = head;
      }
    }
    // extract into new list with real ranking
    for (let j = 0; j < bucketArray.length; j++) {
      let bucketNode = bucketArray[j];
      while (bucketNode) {
        result.push({
          [Object.keys(bucketNode.data)[0]]: Object.values(bucketNode.data)[0],
        });
        bucketNode = bucketNode.next;
      }
    }

    return result;
  }
}
