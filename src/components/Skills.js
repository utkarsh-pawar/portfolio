import React from "react";
import styles from "../styles/Skills.module.css";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaTerminal,
  FaBootstrap,
  FaNpm,
  FaLanguage,
  FaTools
} from "react-icons/fa";
import {
  SiJavascript,
  SiVisualstudiocode,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";



const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles["skills-languages"]}>
        <div className={styles['skills-logo']}>
          <FaLanguage />
        </div>
        <h2>Languages I speak</h2>
        <br />
        <br />
        <div className={styles["skills-languages__logo"]}>
          <FaHtml5 />
        </div>
        <div className={styles["skills-languages__logo"]}>
          <FaCss3 />
        </div>
        <div className={styles["skills-languages__logo"]}>
          <SiJavascript />
        </div>
        <div className={styles["skills-languages__logo"]}>
          <FaReact />
        </div>
        <div className={styles["skills-languages__logo"]}>
          <FaNodeJs />
        </div>
        <div className={styles["skills-languages__logo"]}>
          <SiNextdotjs />
        </div>
        <br />
      </div>
      <div className={styles["skills-technology"]}>
        <div className={styles['skills-logo']}>
          <FaTools />
        </div>
        <h2>Tools I use</h2>
        <br />
        <br />
        <div className={styles["skills-technology__logo"]}>
          <FaGithub />
        </div>
        <div className={styles["skills-technology__logo"]}>
          <SiVisualstudiocode />
        </div>
        <div className={styles["skills-technology__logo"]}>
          <FaNpm />
        </div>
        <div className={styles["skills-technology__logo"]}>
          <FaBootstrap />
        </div>
        <div className={styles["skills-technology__logo"]}>
          <FaTerminal />
        </div>
        <div className={styles["skills-technology__logo"]}>
          <SiTailwindcss />
        </div>
      </div>
    </div>
  );
};

export default Skills;
