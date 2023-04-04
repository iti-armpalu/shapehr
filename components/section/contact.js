import { useEffect, useState } from "react";

import styles from "./contact.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Notification from "../ui/notification";
import Button from "../ui/button";
import Link from "next/link";

async function sendContactData(contactDetails) {
  const response = await fetch(
    "https://6gvomwaqn7.execute-api.us-east-1.amazonaws.com/contact-us/contact-form",
    {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

function Contact() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    // optional: add client-side validation

    setRequestStatus("pending");

    try {
      await sendContactData({
        name: enteredName,
        email: enteredEmail,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredName("");
      setEnteredEmail("");
      setEnteredMessage("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Your message was successfully sent!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section 
      id="contact-section" 
      className={styles.page}>
        <div className={styles.sectionTitle}>
          <span>
            Contact Us
          </span>
          <h2>
            Get in Touch
          </h2>
        </div>

        <div className="container">
          <div className="row justify-content-evenly">
            <div className="col-12 col-lg-6 col-xl-6 ">
              <div className={styles.form}>
                <form onSubmit={sendMessageHandler}>
                  <div className="row">

                    <div className="col-xl-6">
                      <div className={styles.inputWrap}>
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          id="name"
                          required
                          value={enteredName}
                          onChange={(event) => setEnteredName(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className={styles.inputWrap}>
                        <input
                          type="email"
                          id="email"
                          placeholder="Email Address"
                          name="email"
                          required
                          value={enteredEmail}
                          onChange={(event) =>
                            setEnteredEmail(event.target.value)
                          }
                        />
                      </div>
                    </div>

                    {/* <div className="col-xl-6">
                      <div className={styles.inputWrap}>
                        <input
                          type="text"
                          id="number"
                          placeholder="Phone Number"
                          name="phone"
                          required
                          value={enteredNumber}
                          onChange={(event) =>
                            setEnteredNumber(event.target.value)
                          }
                        />
                      </div>
                    </div> */}

                    {/* <div className="col-xl-6">
                      <div className={styles.inputWrap}>
                        <input
                          type="text"
                          id="subject"
                          placeholder="Subject"
                          name="subject"
                          required
                          value={enteredSubject}
                          onChange={(event) =>
                            setEnteredSubject(event.target.value)
                          }
                        />
                      </div>
                    </div> */}
                  </div>

                  <div className="row">

                    <div className="col-xl-12">

                      <div className={styles.inputWrap}>
                        <textarea
                          name="message"
                          placeholder="Write a Message"
                          required
                          value={enteredMessage}
                          onChange={(event) =>
                            setEnteredMessage(event.target.value)
                          }
                        ></textarea>
                      </div>
                      <Button>
                        send a message
                      </Button>
              
                      
                    </div>
                  </div>
                  {notification && (
                    <Notification
                      status={notification.status}
                      title={notification.title}
                      message={notification.message}
                    />
                  )}
                </form>
              </div>
            </div>

            <div className="col-12 col-lg-6 col-xl-4">
              <div className={styles.details}>
                <ul>
                  <li>
                    <span>Call:</span>
                    <p>+ 44 7766 498483</p>
                  </li>
                  <li>
                    <span>Send email:</span>
                    <p>simon.heath@shape-hr.com</p>
                  </li>
                  <li>
                    <span>Connect through social:</span>
                    <p className={styles.social}>
                      <Link href="https://www.linkedin.com/in/simon-heath-81a6271/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </Link>
                      <span>/simon-heath</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Contact;
