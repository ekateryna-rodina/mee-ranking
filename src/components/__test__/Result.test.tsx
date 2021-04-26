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
        Harry: { Potter: 1, Jeff: 1, Kate: 1 },
        Potter: { Harry: 0, Jeff: 0, Kate: 0 },
        Jeff: { Potter: 1, Kate: 0, Harry: 0 },
        Kate: { Jeff: 1, Potter: 1, Harry: 0 },
      },
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
  const ordered = ["Potter", "Harry"];
  const allItems = screen.getAllByTestId("item-test-id");
  allItems.forEach((name, index) => {
    expect(name.textContent).toBe(ordered[index]);
  });
});
