import React, { useState } from "react";
import styles from "./cardTitles.module.scss";

const CardTitles = () => {
  const [title, setTitle] = useState<string>("");
  const [titles, setTitles] = useState<string[]>([]);
  return (
    <div className={`${styles.cardTitlesContainer} my-3 mx-3`}>
      <div
        className={`d-flex flex-row justify-content-between align-items-center py-3 mx-3 ${styles.searchAddContainer}`}
      >
        <input
          data-testid="search-add-title"
          id="seach-add-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.searchAddTitle}
        />
        <button className={`btn btn-dark ${styles.squarePlusButton}`}>
          <span className={`${styles.plus}`}>+</span>
        </button>
      </div>
      {titles.length === 0 && <p>Add new title to your list</p>}
      {titles.length > 0 && (
        <ul className={`${styles.cardTitlesList} px-3`}>
          {titles.map((t, i) => (
            <li key={i.toString()}>
              {(i + 1).toString()}. {t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CardTitles;
