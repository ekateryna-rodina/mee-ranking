export interface ITopic {
  id: string;
  title: string;
}

export interface IDeck {
  topic: ITopic;
  items: {
    [key: string]: string;
  };
}
