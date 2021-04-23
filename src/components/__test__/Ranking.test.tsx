import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Ranking from "../Ranking";

beforeEach(() => {
  const setShowResultMock = jest.fn();
  render(
    <Ranking
      libraryItems={["Jeff", "Kate", "Harry", "Potter"]}
      setShowResult={setShowResultMock}
    />
  );
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
  const inputLen = all.length;

  while (all.length > 1) {
    //   if only 1 pair is left next click will result undefined by design
    if (all.length < inputLen) {
      fireEvent.click(screen.getByTestId("item_0"));
    }
    expect(screen.getByTestId("item_0")).toBeInTheDocument();
    expect(screen.getByTestId("item_1")).toBeInTheDocument();
    let textContentInput = [
      screen.getByTestId("item_0").textContent as string,
      screen.getByTestId("item_1").textContent as string,
    ];
    let found = all.filter((i) => matchPair(i, textContentInput));
    expect(found.length).toBe(1);
    all = all.filter((i) => !matchPair(i, textContentInput));
  }
  expect(all.length).toBe(1);
});
