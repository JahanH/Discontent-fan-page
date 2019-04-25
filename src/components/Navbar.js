import React from "react";
import { Link } from "react-router-dom";
import "../styles/css/header-styles.css";

export class Navbar extends React.Component {
  render() {
    const pages = ["Products", "Events", "Careers", "Contact us"];
    const tabColors = [
      { "backgroundColor": "rgb(131, 206, 241)" },
      { "backgroundColor": "rgb(221, 145, 233)" },
      { "backgroundColor": "rgb(245, 191, 104)" },
      { "backgroundColor": "rgb(223, 243, 123)" },
      { "backgroundColor": "rgb(219,52,48)" }
    ];
    const tabLinks = pages.map((page, i) => {
      let toPage = page==="Products"? "/":"/"+page;
      return (
        <Link to={toPage} style={tabColors[i]}>{page}</Link>
      );
    });

    return <div className="navBar">{tabLinks}</div>;
  }
}
