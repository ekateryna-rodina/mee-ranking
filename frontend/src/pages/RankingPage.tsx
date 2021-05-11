import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Ranking from "../components/Ranking";
import Result from "../components/Result";
import { IDeck } from "../state/deck/models/deck";
import { loadDeckInfoAction } from "../state/selection/selectionActions";

const GET_TOPIC_BY_ID_QUERY = gql`
  query getTopicById($topicId: ID!) {
    getTopicById(topicId: $topicId) {
      id
      title
      items {
        image
        name
        id
      }
    }
  }
`;
const RankingPage = (props: any) => {
  const { topicId } = props.match.params;
  const { data, error, loading } = useQuery(GET_TOPIC_BY_ID_QUERY, {
    variables: { topicId },
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (data) {
      const { id, title, items } = data.getTopicById;
      const itemsObj: {
        [key: string]: string;
      } = {};
      items.forEach((item: any) => {
        const { name, image } = item;
        itemsObj[name] = image;
      });
      const deck: IDeck = { topic: { id, title }, items: itemsObj };
      dispatch(loadDeckInfoAction(deck));
    }
    // eslint-disable-next-line
  }, [data, error]);
  return (
    <div id="content" className="h-100">
      <Ranking />
      <Result />
    </div>
  );
};

export default RankingPage;
