import React from "react";
import styles from "../styles/Error.module.css";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { motion } from "framer-motion";

const Error = () => {
  return (
    <div className={styles.error}>
      <motion.div
        animate={{ y: -1000 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <HiOutlineEmojiSad fontSize={150} color={"#457b9d"} />
        <h1 className={styles["error-heading"]}>404 Error</h1>
        <p className={styles["error-message"]}>
          This isn't the page you are looking for!
        </p>
      </motion.div>
    </div>
  );
};

export default Error;
