import React from "react";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.root}>
      <input placeholder="...search" type="text" />
    </div>
  );
};

export default Search;
