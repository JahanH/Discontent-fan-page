import React from "react";
import { Link } from "react-router-dom";
import "../styles/css/sidebar-styles.css";

export class Sidebar extends React.Component {
  render() {
    let logo =
      "https://s3-media3.fl.yelpcdn.com/bphoto/PjSRY4vVq_LOQSmc4sMsng/ls.jpg";
    let eventImg =
      "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/41231981_2136828089703505_6859081347445555200_n.jpg?_nc_cat=108&oh=d9bd87461b1d04608b2d356a60e4f23e&oe=5C599400";
    let eventAlt = "Back to School sale!";

    return (
      <div className="sidebar">
        <img src={logo} alt="discontent logo" id="logo" />
        <div className="special-event">
          <h4>Upcoming Events</h4>
          <p>
            Calling all students! Kick off the new school year with crazy
            discounts on all your favorite brands! This weekend only!
          </p>
          <Link to="/Events">
            <img src={eventImg} alt={eventAlt} id="event" />
          </Link>
        </div>
        <div className="content-pane" id="store-hours">
          <h4>Store hours</h4>
          <p>
            Mon-Thur 10am - 10pm <br />
            Fri - Sat 10am - 11pm <br />
            Sun 12pm - 8pm
          </p>
        </div>
        <div className="content-pane" id="loc-contact">
          <h4>Location and Contact</h4>
          <p>
            153 Division Street <br />
            Waite Park, MN 56387-1341
          </p>
          <p>(320) 253-7473</p>
        </div>
      </div>
    );
  }
}
