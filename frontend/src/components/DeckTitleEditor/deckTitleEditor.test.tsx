import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../../state/store";
import DeckTitleEditor from "./deckTitleEditor";

beforeEach(() => {
  render(
    <Provider store={store}>
      <DeckTitleEditor />
    </Provider>
  );
});

test("it renders an input with props", () => {
  expect(screen.getByTestId("title-editor")).toHaveAttribute(
    "placeholder",
    "Enter the name of the deck"
  );
  expect(screen.getByTestId("title-editor")).toBeInTheDocument();
});
