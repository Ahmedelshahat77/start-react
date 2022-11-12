import React, { Component } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
          id={styles.navbar}
        >
          <div className="container">
            <Link className={`${styles.logo} navbar-brand`} to="">
              Start React
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    className={`${styles.navlink} nav-link active`}
                    aria-current="page"
                    to="portfolio"
                  >
                    PORTFOLIO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${styles.navlink} nav-link`} to="about">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${styles.navlink} nav-link`} to="contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
