import React from "react";
import "../../styles/css/content-styles.css";
import { EventList } from "./EventList";

export class Events extends React.Component {
  render() {
    return (
      <div id="events">
        <div className="pageContainer">
          <h1 className="pageHeader">Come out and see us sometime!</h1>
          <EventList/>
        </div>
      </div>
    );
  }
}
