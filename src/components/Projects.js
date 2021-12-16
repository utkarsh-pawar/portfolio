import React from "react";
import styles from "../styles/Projects.module.css";
import { projectData } from "../data/project-data";
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa'

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
        return <div className={styles["project"]}>
          <div className={styles['project-img-div']}>

            <div className={styles['project-img']} style={{ background: `url(${project.img})` }}></div>
          </div>
          <div className={styles['projects-desc']}>
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <div>
              <a target="_blank" rel="noreferrer" href={project.github}><FaCode /></a>
              <a target="_blank" rel="noreferrer" href={project.url}><FaExternalLinkAlt /></a>
            </div>
          </div>


        </div>;
      })}
    </div>
  );
};

export default Projects;
