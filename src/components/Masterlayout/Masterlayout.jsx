import React, { Component } from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Portfolio from "../Portfolio/Portfolio";

export default class Masterlayout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}
