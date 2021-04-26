// idea is to keep track of nodes which loose to other nodes
// remove node which looses to every other and put it in ordered
// remove all its dependencies
export function sort(jobs: Array<string>, deps: string[][]) {
  // Write your code here.
  const rankGraph = createRankGraph(jobs, deps);
  return getOrderedItems(rankGraph);
}

function getOrderedItems(graph: RankGraph) {
  let ordered = [];
  const nodesWithNoPrereq = graph.nodes.filter((n: ItemNode) => !n.numOfWins);
  while (nodesWithNoPrereq.length) {
    const node = nodesWithNoPrereq.pop() as ItemNode;
    ordered.unshift(node.title);
    removeDeps(node, nodesWithNoPrereq);
  }
  const graphHasEdges = graph.nodes.some((n: ItemNode) => n.numOfWins);
  console.log(graphHasEdges ? "cycle" : "");
  return graphHasEdges ? [] : ordered;
}
function removeDeps(node: ItemNode, nodesWithNoPrereq: Array<ItemNode>) {
  while (node.deps.length) {
    let dep = node.deps.pop() as ItemNode;
    dep.numOfWins--;
    if (!dep.numOfWins) {
      nodesWithNoPrereq.push(dep);
    }
  }
}
function createRankGraph(items: Array<string>, deps: string[][]) {
  let graph = new RankGraph(items);
  for (let __ of deps) {
    // 		add edges
    const [item, dep] = __;
    graph.addDeps(item, dep);
  }
  return graph;
}

class RankGraph {
  nodes: ItemNode[];
  graph: {
    [key: string]: ItemNode;
  };
  constructor(items: Array<string>) {
    this.nodes = [];
    this.graph = {};
    for (let item of items) {
      this.addNode(item);
    }
  }
  addDeps(item: string, dep: string) {
    const itemNode = this.getNode(item);
    const depNode = this.getNode(dep);
    itemNode.deps.push(depNode);
    depNode.numOfWins++;
  }
  addNode(title: string) {
    this.graph[title] = new ItemNode(title);
    this.nodes.push(this.graph[title]);
  }

  getNode(title: string) {
    if (!(title in this.graph)) {
      this.addNode(title);
    }
    return this.graph[title];
  }
}

class ItemNode {
  title: string;
  deps: ItemNode[];
  numOfWins: number;
  constructor(title: string) {
    this.title = title;
    this.deps = [];
    this.numOfWins = 0;
  }
}
