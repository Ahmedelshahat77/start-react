import React, { Component } from "react";
import styles from "./Footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id={styles.footer} className=" text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4  mb-5">
                <h4 className=" mb-4">LOCATION</h4>
                <p>
                  2215 John Daniel <br /> Drive Clark, MO 65243
                </p>
              </div>
              <div className="col-md-4  mb-5">
                <h4 className=" mb-4">AROUND THE WEB</h4>
                <div className="social d-flex my-2 justify-content-center gap-3">
                  <div className={styles.icon}>
                    <i class="fa-brands fa-facebook-f "></i>
                  </div>
                  <div className={styles.icon}>
                    <i class="fa-brands fa-twitter "></i>
                  </div>
                  <div className={styles.icon}>
                    <i class="fa-brands fa-linkedin-in "></i>
                  </div>
                  <div className={styles.icon}>
                    <i class="fa-brands fa-dribbble "></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4  mb-5">
                <h4 className=" mb-4">ABOUT FREELANCER</h4>
                <p>
                  Freelance is a free to use, MIT <br />
                  licensed Bootstrap theme created by Route
                </p>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright bg-dark text-center text-white py-3">
          Copyright © Your Website 2021
        </div>
      </div>
    );
  }
}
