import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Result from "../Result";

const mockStore = configureStore([]);

let store: any;

beforeEach(() => {
  store = mockStore({
    ranking: {
      rankingMap: {
        incredibles: { nemo: 0, toystory: 0 },
        nemo: { incredibles: 1, toystory: 1 },
        toystory: { incredibles: 1, nemo: 0 },
      },
      items: ["incredibles", "nemo", "toystory"],
      deps: [
        ["incredibles", "nemo"],
        ["incredibles", "toystory"],
        ["nemo", "toystory"],
      ],
    },
    controls: {
      showResult: true,
      showSettings: false,
    },
  });
  return render(
    <Provider store={store}>
      <Result />
    </Provider>
  );
});

test("renders the component", () => {
  expect(screen.getByTestId("resultsList")).toBeInTheDocument();
});

test("orders correctly results from ranking map", () => {
  const ordered = ["nemo", "toystory", "incredibles"];
  const allItems = screen.getAllByTestId("item-test-id");
  allItems.forEach((name, index) => {
    expect(name.textContent).toBe(ordered[index]);
  });
});
