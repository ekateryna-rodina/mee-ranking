import { IItem } from "./item";

export interface ITopic {
  id: string;
  title: string;
}

export interface IDeck {
  topic: ITopic;
  items: {
    [key: string]: IItem;
  };
}
