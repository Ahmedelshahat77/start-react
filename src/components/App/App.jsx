import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Masterlayout from "../Masterlayout/Masterlayout";

export default class App extends Component {
  routes = createBrowserRouter([
    {
      path: "/",
      element: <Masterlayout />,
      children: [
        { index: true, element: <Header /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);
  render() {
    return (
      <div>
        <RouterProvider router={this.routes} />
      </div>
    );
  }
}
