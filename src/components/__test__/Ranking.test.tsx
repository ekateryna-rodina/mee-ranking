import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../../state/store";
import Ranking from "../Ranking";

beforeEach(() => {
  render(
    <Provider store={store}>
      <Ranking libraryItems={["Jeff", "Kate", "Harry", "Potter"]} />
    </Provider>
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

  fireEvent.click(screen.getByTestId("item_0"));
  while (all.length > 1) {
    //   if only 1 pair is left next click will result undefined by design
    expect(screen.getByTestId("item_0")).toBeInTheDocument();
    expect(screen.getByTestId("item_1")).toBeInTheDocument();
    let textContentInput = [
      screen.getByTestId("item_0").textContent as string,
      screen.getByTestId("item_1").textContent as string,
    ];
    let found = all.filter((i) => matchPair(i, textContentInput));
    expect(found.length).toBe(1);
    all = all.filter((i) => !matchPair(i, textContentInput));
    fireEvent.click(screen.getByTestId("item_0"));
  }
  expect(all.length).toBe(1);
});
test("progress bar is in document", () => {
  expect(screen.getByRole("progress")).toBeInTheDocument();
});
