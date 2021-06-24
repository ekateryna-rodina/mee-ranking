import React, { useState } from "react";
import { TitleEditor } from "../TitleEditor";

const CardTitleEditor = () => {
  const [cardTitle, setCardTitle] = useState<string>("");
  const props = {
    value: cardTitle,
    setValue: setCardTitle,
    placeholder: "",
    label: "Card Title",
  };
  return <TitleEditor {...props} />;
};

export default CardTitleEditor;
