import React, { Component } from "react";
import styles from "./Contact.module.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section id={styles.contact}>
          <div className="container">
            <h2
              className={`${styles.heading} text-center text-uppercase  mb-0`}
            >
              Contact
            </h2>
            <div className={styles.dividerDiv}>
              <div className={styles.dividerRight}></div>
              <i className="fa-solid fa-star fa-2x"></i>
              <div className={styles.dividerLeft}></div>
            </div>
            <div className="row">
              <div className="form col-lg-8 mx-auto">
                <div>
                  <div className={`${styles.botBorder} mb-3`}>
                    <input
                      type="text"
                      className={`${styles.input} form-control`}
                      id="exampleFormControlInput1"
                      placeholder="Name"
                    />
                  </div>
                  <div className={`${styles.botBorder} mb-3`}>
                    <input
                      type="email"
                      className={`${styles.input} form-control`}
                      id="exampleFormControlInput1"
                      placeholder="Email Adress"
                    />
                  </div>
                  <div className={`${styles.botBorder} mb-3`}>
                    <input
                      type="text"
                      className={`${styles.input} form-control`}
                      id="exampleFormControlInput1"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className={`${styles.botBorder} mb-3`}>
                    <textarea
                      className={`${styles.input} form-control`}
                      placeholder="Massage"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                  <div className={`mb-3`}>
                    <button type="button" class={`${styles.formBtn} btn`}>
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
