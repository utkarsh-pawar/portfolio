import React from "react";
import styles from "../styles/BriefInfo.module.css";

const BriefInfo = () => {
  return (
    <div className={styles["brief-info"]}>
      <div className={styles["brief-info__text"]}>
        <h2>Front-End Developer</h2>
        <p>I like to code from scratch and bring to code to life in browser.</p>
        <br />
        <div>
          Just a boring man, who once clicked 'view source' of a webpage with
          curiosity and now is a <strong>Front-End Developer</strong> and want
          to become a <strong>Full-Stack Developer.</strong>
        </div>
      </div>
    </div>
  );
};

export default BriefInfo;
