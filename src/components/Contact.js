import React from "react";
import styles from "../styles/Contact.module.css";
import Email from "./Email";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles["contact-email"]}>
        <Email />
      </div>
      <div className={styles["contact-social"]}>
        <a target='_blank' rel='norefferer' href='https://www.instagram.com/utkarsh_01__'><div className={styles['contact-social__links']}><FaInstagram /><label>Instagram</label></div></a>
        <a target='_blank' rel='norefferer' href='https://www.github.com/utkarsh-pawar' ><div className={styles['contact-social__links']}><FaGithub /> <label>Github</label> </div></a>
        <a target='_blank' rel='norefferer' href='https://www.linkedin.com/in/utkarsh-pawar'><div className={styles['contact-social__links']}><FaLinkedin /> <label>LinkedIn</label> </div></a>
        <a target='_blank' rel='norefferer' href='https://www.twitter.com/utkarshpawar18'><div className={styles['contact-social__links']}><FaTwitter /> <label>Twitter</label> </div></a>


      </div>
    </div>
  );
};

export default Contact;
