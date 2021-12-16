import React from "react";
import styles from "../styles/Contact.module.css";
import Email from "./Email";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles["contact-email"]}>
        <Email />
      </div>
      <div className={styles["contact-social"]}>
          <div className={styles['contact-social__links']}><FaInstagram /><label>Instagram</label></div>
          <div className={styles['contact-social__links']}><FaGithub /> <label>Github</label> </div>
          <div className={styles['contact-social__links']}><FaLinkedin/> <label>LinkedIn</label> </div>
          <div className={styles['contact-social__links']}><FaTwitter /> <label>Twitter</label> </div>


      </div>
    </div>
  );
};

export default Contact;
