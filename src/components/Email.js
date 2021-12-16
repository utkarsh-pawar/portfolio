import React, { useRef, useState } from "react";
import classes from "../styles/Email.module.css";
import emailjs from "emailjs-com";

const Email = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wso4yqe",
        "contact_form",
        form.current,
        "user_fkT9TquvH3SexFBu3Rmj7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setIsSubmitted(true);
  };

  return (
    <div className={classes.email}>
      <div className={classes.emailCard}>
        {isSubmitted ? (
          <h2>Your Message Has Been Sent !!</h2>
        ) : (
          <form className={classes.formDiv} ref={form} onSubmit={sendEmail}>
            <div className={classes.headdiv}>
              <h1>Ask Me Anything!!</h1>
              {/* <h1>Ask Me Anything!!</h1> */}
            </div>

            <div className={classes["nameDiv"]}>
              <label className={classes.label}>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                className={classes.field}
                required
              />
            </div>

            <div className={classes.emailDiv}>
              <label className={classes.label}>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter Email Address"
                className={classes.field}
                required
              />
            </div>

            <div className={classes.messageDiv}>
              <label className={classes.label}>Message</label>
              <textarea
                name="message"
                placeholder="Type Something You Want To Ask!!"
                className={classes.field}
                required
              />
            </div>

            <div className={classes.buttonDiv}>
              <button type="submit" value="Send">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Email;
