import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../../state/store";
import CardTitleEditor from "./cardTitleEditor";

beforeEach(() => {
  render(
    <Provider store={store}>
      <CardTitleEditor />
    </Provider>
  );
});

test("it renders an input with props", () => {
  expect(screen.getByTestId("title-editor")).toBeInTheDocument();
  expect(screen.getByLabelText("Card Title")).toBeInTheDocument();
});
