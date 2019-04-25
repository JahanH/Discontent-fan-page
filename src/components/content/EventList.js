import React from "react";
import "../../styles/css/event-styles.css";

export class EventList extends React.Component {
  render() {
    const monthAbr = [null, "Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    let events = [
      {
        title: "Back to School",
        banner: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/41231981_2136828089703505_6859081347445555200_n.jpg?_nc_cat=108&oh=d9bd87461b1d04608b2d356a60e4f23e&oe=5C599400",
        startDate: new Date(2018, 9, 14),
        endDate: new Date(2018, 9, 16),
        infoText: "We’re celebrating 8 years! Get ready for a fun weekend with A3D3 kicking it off on Friday and come back Sunday for an afternoon jam session with King Kadabra!",
      },
      {
        title: "Shop for a Claws",
        banner: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/42744686_2167338089985838_5208045796594810880_n.jpg?_nc_cat=106&oh=a08c0850cb01014a977878e1ea784c51&oe=5C5E42C8",
        startDate: new Date(2018, 10, 6),
        endDate: new Date(2018, 10, 7),
        infoText: "We will be having a fundraiser Saturday and Sunday October 6th and 7th for the Tri-County Humane Society! 20% of sales on animal themed clothing (only) will be donated. Be sure to stop by Sunday 3-4pm for a special kitten visit, play and pet with some adorable kitties!",
      }
    ]

    const eventsMap = events.map((event, i) => {
      const startMonth = monthAbr[event.startDate.getMonth()];
      const startDay = event.startDate.getDate();
      const endMonth = monthAbr[event.endDate.getMonth()];
      const endDay = event.endDate.getDate();
      const sameMonth = startMonth===endMonth; 

      return (
        <ul className="eventRow">
          <li className="eventBanner">
            <img src={event.banner}/>
          </li>
          <li className="eventInfo">
            <h1>{event.title}</h1>
            <h3>{startMonth} {startDay} - {sameMonth&&endMonth} {endDay}</h3>
            <p className="eventDescription">{event.infoText}</p>
          </li>
        </ul>
      );
    });

    return eventsMap;
  }
}
