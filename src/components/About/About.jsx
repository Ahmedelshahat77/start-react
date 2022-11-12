import React, { Component } from "react";
import styles from "./About.module.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <section id={styles.about}>
          <div className="container">
            <h2
              className={`${styles.heading} text-center text-uppercase  mb-0`}
            >
              About
            </h2>
            <div className={styles.dividerDiv}>
              <div className={styles.dividerRight}></div>
              <i className="fa-solid fa-star fa-2x text-white"></i>
              <div className={styles.dividerLeft}></div>
            </div>
            <div className="row">
              <div className="col-md-4 ms-auto text-white">
                <p className={styles.prag}>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-4 me-auto text-white">
                <p className={styles.prag}>
                  You can create your own custom avatar for the masthead, change
                  the icon in the dividers, and add your email address to the
                  contact form to make it fully functional!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
