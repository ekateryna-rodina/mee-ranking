import React, { useState } from "react";
import { TitleEditor } from "../TitleEditor";

const DeckTitleEditor = () => {
  const [deckTitle, setDeckTitle] = useState<string>("");
  const props = {
    value: deckTitle,
    setValue: setDeckTitle,
    placeholder: "Enter the name of the deck",
    label: "List Title",
  };
  return <TitleEditor {...props} />;
};

export default DeckTitleEditor;
