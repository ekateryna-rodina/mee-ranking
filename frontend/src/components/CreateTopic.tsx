import React, { useState } from "react";

const CreateTopic = () => {
  const [topic, setTopic] = useState("");
  return (
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
  );
};

export default CreateTopic;
