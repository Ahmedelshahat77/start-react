import React, { Component } from "react";
import styles from "./Portfolio.module.css";
import photo1 from "../../images/cabin.png";
import photo2 from "../../images/cake.png";
import photo3 from "../../images/circus.png";
import photo4 from "../../images/game.png";
import photo5 from "../../images/safe.png";
import photo6 from "../../images/submarine.png";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <section id={styles.portfolio}>
          <div className="container">
            <h2
              className={`${styles.heading} text-center text-uppercase  mb-0`}
            >
              Portfolio
            </h2>
            <div className={styles.dividerDiv}>
              <div className={styles.dividerRight}></div>
              <i className="fa-solid fa-star fa-2x"></i>
              <div className={styles.dividerLeft}></div>
            </div>
            <div className="row justify-content-center gy-3">
              <div className="col-md-4">
                <div className={styles.item}>
                  <div
                    className={`${styles.overlay} text-white rounded-2`}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                  <div className={styles.image}>
                    <img
                      className=" img-fluid rounded-2 "
                      src={photo1}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.item}>
                  <div
                    className={`${styles.overlay} text-white rounded-2`}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                  <div className={styles.image}>
                    <img
                      className=" img-fluid rounded-2 "
                      src={photo2}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.item}>
                  <div
                    className={`${styles.overlay} text-white rounded-2`}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                  >
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                  <div className={styles.image}>
                    <img
                      className=" img-fluid rounded-2 "
                      src={photo3}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.item}>
                  <div
                    className={`${styles.overlay} text-white rounded-2`}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal4"
                  >
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                  <div className={styles.image}>
                    <img
                      className=" img-fluid rounded-2 "
                      src={photo4}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.item}>
                  <div
                    className={`${styles.overlay} text-white rounded-2`}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal5"
                  >
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                  <div className={styles.image}>
                    <img
                      className=" img-fluid rounded-2 "
                      src={photo5}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.item}>
                  <div
                    className={`${styles.overlay} text-white rounded-2`}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal6"
                  >
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                  <div className={styles.image}>
                    <img
                      className=" img-fluid rounded-2 "
                      src={photo6}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header ms-auto">
                    <div className={styles.fontGreen} data-bs-dismiss="modal">
                      <i class="fa-solid fa-xmark px-2 fa-3x"></i>
                    </div>
                  </div>
                  <div className="modal-body ">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-md-8">
                          <h2
                            className={`${styles.heading} text-center text-uppercase  mb-0`}
                          >
                            LOG CABIN
                          </h2>
                          <div className={styles.dividerDiv}>
                            <div className={styles.dividerRight}></div>
                            <i className="fa-solid fa-star fa-2x"></i>
                            <div className={styles.dividerLeft}></div>
                          </div>
                          <div>
                            <img
                              className=" img-fluid rounded-2 "
                              src={photo1}
                              alt=""
                            />
                          </div>
                          <p className=" py-2 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Mollitia neque assumenda ipsam nihil,
                            molestias magnam, recusandae quos quis inventore
                            quisquam velit asperiores, vitae? Reprehenderit
                            soluta, eos quod consequuntur itaque. Nam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                    <button
                      type="button"
                      className={`${styles.green} btn`}
                      data-bs-dismiss="modal"
                    >
                      <i class="fa-solid fa-xmark px-2"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal2"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header ms-auto">
                    <div className={styles.fontGreen} data-bs-dismiss="modal">
                      <i class="fa-solid fa-xmark px-2 fa-3x"></i>
                    </div>
                  </div>
                  <div className="modal-body ">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-md-8">
                          <h2
                            className={`${styles.heading} text-center text-uppercase  mb-0`}
                          >
                            TASTY CAKE
                          </h2>
                          <div className={styles.dividerDiv}>
                            <div className={styles.dividerRight}></div>
                            <i className="fa-solid fa-star fa-2x"></i>
                            <div className={styles.dividerLeft}></div>
                          </div>
                          <div>
                            <img
                              className=" img-fluid rounded-2 "
                              src={photo2}
                              alt=""
                            />
                          </div>
                          <p className=" py-2 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Mollitia neque assumenda ipsam nihil,
                            molestias magnam, recusandae quos quis inventore
                            quisquam velit asperiores, vitae? Reprehenderit
                            soluta, eos quod consequuntur itaque. Nam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                    <button
                      type="button"
                      className={`${styles.green} btn`}
                      data-bs-dismiss="modal"
                    >
                      <i class="fa-solid fa-xmark px-2"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal3"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header ms-auto">
                    <div className={styles.fontGreen} data-bs-dismiss="modal">
                      <i class="fa-solid fa-xmark px-2 fa-3x"></i>
                    </div>
                  </div>
                  <div className="modal-body ">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-md-8">
                          <h2
                            className={`${styles.heading} text-center text-uppercase  mb-0`}
                          >
                            CIRCUS TENT
                          </h2>
                          <div className={styles.dividerDiv}>
                            <div className={styles.dividerRight}></div>
                            <i className="fa-solid fa-star fa-2x"></i>
                            <div className={styles.dividerLeft}></div>
                          </div>
                          <div>
                            <img
                              className=" img-fluid rounded-2 "
                              src={photo3}
                              alt=""
                            />
                          </div>
                          <p className=" py-2 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Mollitia neque assumenda ipsam nihil,
                            molestias magnam, recusandae quos quis inventore
                            quisquam velit asperiores, vitae? Reprehenderit
                            soluta, eos quod consequuntur itaque. Nam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                    <button
                      type="button"
                      className={`${styles.green} btn`}
                      data-bs-dismiss="modal"
                    >
                      <i class="fa-solid fa-xmark px-2"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal4"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header ms-auto">
                    <div className={styles.fontGreen} data-bs-dismiss="modal">
                      <i class="fa-solid fa-xmark px-2 fa-3x"></i>
                    </div>
                  </div>
                  <div className="modal-body ">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-md-8">
                          <h2
                            className={`${styles.heading} text-center text-uppercase  mb-0`}
                          >
                            CONTROLLER
                          </h2>
                          <div className={styles.dividerDiv}>
                            <div className={styles.dividerRight}></div>
                            <i className="fa-solid fa-star fa-2x"></i>
                            <div className={styles.dividerLeft}></div>
                          </div>
                          <div>
                            <img
                              className=" img-fluid rounded-2 "
                              src={photo4}
                              alt=""
                            />
                          </div>
                          <p className=" py-2 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Mollitia neque assumenda ipsam nihil,
                            molestias magnam, recusandae quos quis inventore
                            quisquam velit asperiores, vitae? Reprehenderit
                            soluta, eos quod consequuntur itaque. Nam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                    <button
                      type="button"
                      className={`${styles.green} btn`}
                      data-bs-dismiss="modal"
                    >
                      <i class="fa-solid fa-xmark px-2"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal5"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header ms-auto">
                    <div className={styles.fontGreen} data-bs-dismiss="modal">
                      <i class="fa-solid fa-xmark px-2 fa-3x"></i>
                    </div>
                  </div>
                  <div className="modal-body ">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-md-8">
                          <h2
                            className={`${styles.heading} text-center text-uppercase  mb-0`}
                          >
                            LOCKED SAFE
                          </h2>
                          <div className={styles.dividerDiv}>
                            <div className={styles.dividerRight}></div>
                            <i className="fa-solid fa-star fa-2x"></i>
                            <div className={styles.dividerLeft}></div>
                          </div>
                          <div>
                            <img
                              className=" img-fluid rounded-2 "
                              src={photo5}
                              alt=""
                            />
                          </div>
                          <p className=" py-2 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Mollitia neque assumenda ipsam nihil,
                            molestias magnam, recusandae quos quis inventore
                            quisquam velit asperiores, vitae? Reprehenderit
                            soluta, eos quod consequuntur itaque. Nam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                    <button
                      type="button"
                      className={`${styles.green} btn`}
                      data-bs-dismiss="modal"
                    >
                      <i class="fa-solid fa-xmark px-2"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal6"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header ms-auto">
                    <div className={styles.fontGreen} data-bs-dismiss="modal">
                      <i class="fa-solid fa-xmark px-2 fa-3x"></i>
                    </div>
                  </div>
                  <div className="modal-body ">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-md-8">
                          <h2
                            className={`${styles.heading} text-center text-uppercase  mb-0`}
                          >
                            SUBMARINE
                          </h2>
                          <div className={styles.dividerDiv}>
                            <div className={styles.dividerRight}></div>
                            <i className="fa-solid fa-star fa-2x"></i>
                            <div className={styles.dividerLeft}></div>
                          </div>
                          <div>
                            <img
                              className=" img-fluid rounded-2 "
                              src={photo6}
                              alt=""
                            />
                          </div>
                          <p className=" py-2 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Mollitia neque assumenda ipsam nihil,
                            molestias magnam, recusandae quos quis inventore
                            quisquam velit asperiores, vitae? Reprehenderit
                            soluta, eos quod consequuntur itaque. Nam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                    <button
                      type="button"
                      className={`${styles.green} btn`}
                      data-bs-dismiss="modal"
                    >
                      <i class="fa-solid fa-xmark px-2"></i>
                      Close Window
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
