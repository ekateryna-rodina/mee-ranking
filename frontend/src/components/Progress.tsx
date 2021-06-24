import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ISelection } from "../state/selection/models/selection";
import { AppState } from "../state/store";

const Progress = () => {
  const { counter, totalCount } = useSelector(
    (state: AppState) => state.selection
  ) as ISelection;
  const [progressValue, setProgressValue] = useState<string>("0");
  useEffect(() => {
    const value = ((counter * 100) / totalCount).toString();
    setProgressValue(value);
    // eslint-disable-next-line
  }, [counter]);
  return <progress max="100" value={progressValue}></progress>;
};

export default Progress;
