import React from "react";
import { Navbar } from "./Navbar";
import "../styles/css/header-styles.css";

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Welcome to Discontent - Waite Park</h1>
        <Navbar />
      </div>
    );
  }
}
