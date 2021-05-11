import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createTopicAction } from "../state/deck/deckActions";

const CREATE_TOPIC_MUTATION = gql`
  mutation createTopic($title: String!) {
    createTopic(title: $title) {
      id
      createdAt
      title
      creator {
        id
        name
      }
      responders {
        id
        name
      }
      items {
        name
      }
    }
  }
`;
const CreateTopic = () => {
  const [topic, setTopic] = useState("");
  const dispatch = useDispatch();
  const [createTopic, { data, error, loading }] = useMutation(
    CREATE_TOPIC_MUTATION
  );
  const createTopicHandlerHandler = (e: React.MouseEvent) => {
    const variables = {
      title: topic,
    };
    createTopic({ variables });
  };
  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (data) {
      const { id, title } = data.createTopic;
      dispatch(createTopicAction({ id, title }));
    }
    // eslint-disable-next-line
  }, [error, data]);
  return (
    <>
      <div className="form-group">
        <label htmlFor="topic">
          What is the question or topic you want to rank?
        </label>
        <input
          className="form-control"
          type="text"
          id="topic"
          value={topic}
          data-testid="itemInput"
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>
      <button
        data-testid="createTopicButton"
        onClick={createTopicHandlerHandler}
      >
        Add
      </button>
    </>
  );
};

export default CreateTopic;
