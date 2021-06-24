import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../../state/store";
import TitleEditor from "./titleEditor";

beforeEach(() => {
  render(
    <Provider store={store}>
      <TitleEditor
        placeholder={"test placeholder"}
        value={"initial value"}
        setValue={() => console.log("value is set")}
        label={"label"}
      />
    </Provider>
  );
});

test("it renders an input with props", () => {
  expect(screen.getByTestId("title-editor")).toHaveAttribute(
    "placeholder",
    "test placeholder"
  );
  expect(screen.getByTestId("title-editor")).toHaveAttribute(
    "value",
    "initial value"
  );
  expect(screen.getByTestId("title-editor")).toBeInTheDocument();
});
