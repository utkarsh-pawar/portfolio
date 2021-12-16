import React from "react";
import styles from "../styles/Projects.module.css";
import { projectData } from "../data/project-data";
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1>PROJECTS</h1>
      {projectData.map((project) => {
        return <div className={styles["project"]}>

          <div className={styles['project-img-div']}>

            <div className={styles['project-img']} style={{ background: `url(${project.img})` }}></div>
          </div>
          <div className={styles['projects-desc']}>
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <div className={styles['project-links']}>
              <a target="_blank" rel="noreferrer" href={project.github}><FaCode className={styles['project-links__icon']} /></a>
              <a target="_blank" rel="noreferrer" href={project.url}><FaExternalLinkAlt className={styles['project-links__icon']} /></a>
            </div>
          </div>

        </div>;
      })}
    </div>
  );
};

export default Projects;
