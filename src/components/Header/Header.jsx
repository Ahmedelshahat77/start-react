import React, { Component } from "react";
import styles from "./Header.module.css";
import avatar from "../../images/avatar.svg";
export default class extends Component {
  render() {
    return (
      <div className="bg-primary text-white text-center" id={styles.header}>
        <div className="container d-flex align-items-center flex-column">
          <img className={styles.avatar} src={avatar} alt="" />
          <h1 className={styles.heading}>Start React</h1>
          <div className={styles.dividerDiv}>
            <div className={styles.dividerRight}></div>
            <i className="fa-solid fa-star fa-2x"></i>
            <div className={styles.dividerLeft}></div>
          </div>
          <p className={styles.subheading}>
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    );
  }
}
