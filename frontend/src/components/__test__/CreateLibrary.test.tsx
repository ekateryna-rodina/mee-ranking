import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import CreateLibrary from "../CreateLibrary";

afterEach(cleanup);
let getByTestId: Function;
let getByText: Function;
let rerender: Function;
const setLibraryItemsMock = jest.fn();
const setStartRankingMock = jest.fn();
beforeEach(() => {
  const component = render(
    <CreateLibrary
      libraryItems={[]}
      setLibraryItems={setLibraryItemsMock}
      setStartRanking={setStartRankingMock}
    />
  );
  getByTestId = component.getByTestId;
  getByText = component.getByText;
  rerender = component.rerender;
});
test("input renders correctly and it is initially empty", () => {
  const itemInput = getByTestId("itemInput");
  expect(itemInput).toBeInTheDocument();
  expect((itemInput as HTMLInputElement).value).toBe("");
});

test("list is initially empty", () => {
  const noItemsPlaceHolder = getByTestId("noItemsPlaceholder");
  expect(noItemsPlaceHolder.textContent).toBe("There are no items in the list");
});

test("add to the list button renders correctly", () => {
  const addToListButton = getByTestId("addToListButton");
  expect(addToListButton).toBeInTheDocument();
  expect(addToListButton.textContent).toBe("Add");
});

test("add to the list button adds to the list, renders 1 item", async () => {
  const itemInput = getByTestId("itemInput");
  const addToListButton = getByTestId("addToListButton");
  fireEvent.change(itemInput, { target: { value: "Coco Chanel" } });
  expect((itemInput as HTMLInputElement).value).toBe("Coco Chanel");
  fireEvent.click(addToListButton);
  expect(setLibraryItemsMock).toHaveBeenCalledTimes(1);
  expect((itemInput as HTMLInputElement).value).toBe("");
  rerender(
    <CreateLibrary
      libraryItems={["Coco Chanel"]}
      setLibraryItems={setLibraryItemsMock}
      setStartRanking={setStartRankingMock}
    />
  );
  await waitFor(() => {
    expect(getByText("Coco Chanel")).toBeInTheDocument();
  });
});

test("list container is rendered", () => {
  const votingItemsContainer = getByTestId("votingItemsContainer");
  expect(votingItemsContainer).toBeDefined();
});
