import React from "react";
import styles from "./titleEditor.module.scss";
interface ITitleEditorProps {
  setValue: Function;
  value: string;
  placeholder: string;
  label: string;
}
const TitleEditor = (props: ITitleEditorProps) => {
  const { setValue, value, placeholder, label } = props;
  return (
    <div className="d-flex flex-row justify-content-between align-items-center px-3">
      <label className="white-label" htmlFor="title-editor-input">
        {label}
      </label>
      <input
        id="title-editor-input"
        value={value}
        onChange={() => setValue}
        placeholder={placeholder}
        data-testid="title-editor"
        className={styles.titleInput}
      />
    </div>
  );
};

export default TitleEditor;
