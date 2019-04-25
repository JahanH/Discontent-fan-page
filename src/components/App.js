import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Route, Link, BrowserRouter } from "react-router-dom";
import "../styles/css/app-styles.css";
import { Products } from "./content/Products";
import { Events } from "./content/Events";
import { Careers } from "./content/Careers";
import { ContactUs } from "./content/ContactUs";


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <Header />
          <div className="contentPage">
            <Route exact path="/" component={Products} />
            <Route path="/Events" component={Events} />
            <Route path="/Careers" component={Careers} />
            <Route path="/Contact us" component={ContactUs} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

