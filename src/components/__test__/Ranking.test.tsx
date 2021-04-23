import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import Ranking from "../Ranking";
afterEach(cleanup);
let getByTestId: Function;
beforeEach(() => {
  const setRankingResultMock = jest.fn();
  const setShowResultMock = jest.fn();
  const rankingResult = {};
  const component = render(
    <Ranking
      libraryItems={["Jeff", "Kate", "Harry", "Potter"]}
      setShowResult={setShowResultMock}
    />
  );
  getByTestId = component.getByTestId;
});
const matchPair = (i: Array<string>, textContentInput: Array<string>) =>
  (i[0] === textContentInput[0] && i[1] === textContentInput[1]) ||
  (i[0] === textContentInput[1] && i[1] === textContentInput[0]);
test("shows voting items on the page and changes pair on click", () => {
  let all = [
    ["Harry", "Potter"],
    ["Jeff", "Kate"],
    ["Kate", "Harry"],
    ["Jeff", "Harry"],
    ["Jeff", "Potter"],
    ["Kate", "Potter"],
  ];

  expect(getByTestId("item_0")).toBeInTheDocument();
  expect(getByTestId("item_1")).toBeInTheDocument();
  let textContentInput = [
    getByTestId("item_0").textContent,
    getByTestId("item_1").textContent,
  ];
  let found = all.filter((i) => matchPair(i, textContentInput));
  expect(found.length).toBe(1);
  all = all.filter((i) => !matchPair(i, textContentInput));

  fireEvent.click(getByTestId("item_1"));
  console.log(getByTestId("item_0").textContent);
  console.log(getByTestId("item_1").textContent);
  while (all.length) {
    fireEvent.click(getByTestId("item_0"));
    expect(getByTestId("item_0")).toBeInTheDocument();
    expect(getByTestId("item_1")).toBeInTheDocument();
    let textContentInput = [
      getByTestId("item_0").textContent,
      getByTestId("item_1").textContent,
    ];
    let found = all.filter((i) => matchPair(i, textContentInput));
    expect(found.length).toBe(1);
    all = all.filter((i) => !matchPair(i, textContentInput));
  }

  expect(all.length).toBe(0);
});
