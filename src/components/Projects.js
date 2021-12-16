import React from "react";
import styles from "../styles/Projects.module.css";
import { projectData } from "../data/project-data";

const Projects = () => {
  return (
    <div className={styles.projects}>
      {/* <div className={styles['projects-children']}>1</div>
            <div className={styles['projects-children']}>1</div>
            <div className={styles['projects-children']}>1</div>
            <div className={styles['projects-children']}>1</div>
            <div className={styles['projects-children']}>1</div>
            <div className={styles['projects-children']}>1</div>
            <div className={styles['projects-children']}>1</div>
            <div className={styles['projects-children']}>1</div>
            <div className={styles['projects-children']}>1</div> */}
      {projectData.map((project) => {
        return <div className={styles["projects-children"]}></div>;
      })}
    </div>
  );
};

export default Projects;
