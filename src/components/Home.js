import React from "react";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import HomeImage from "../assets/home-image.svg";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  const linkVariant = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
      },
    },
  };

  const textVariant = {
    initial: {
      opacity: 0,
      x: -40,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  const logoVariant = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className={styles.home}>
      <div className={styles["home-info"]}>
        <motion.div initial="initial" animate="animate" variants={textVariant}>
          <h1>Hey!</h1>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          variants={textVariant}
        >
          <h2 className={styles["home-info__name"]}>I'm Utkarsh Pawar</h2>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ delay: 0.8 }}
          variants={textVariant}
        >
          <h2>Wanna be Full-Stack Web Developer.</h2>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          transition="transition"
          variants={linkVariant}
        >
          <div className={styles["home-link"]}>
            <FaInstagram />
            <FaGithub />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </motion.div>
      </div>
      {/* <motion.div initial="initial" animate="animate" variants={logoVariant}> */}
        <div className={styles["home-image"]}>
          <img style={{ 'width':'55%','color':'green'}} src={HomeImage} alt="adad" />
        </div>
      {/* </motion.div> */}
    </div>
  );
};

export default Home;
