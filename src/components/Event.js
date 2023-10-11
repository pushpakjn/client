import React, { useEffect, useState } from "react";
import EventCard from "./EventCard.js";
import { useLocation } from "react-router-dom";
import "./Event.css"; // Import the CSS file

const Event = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setEvents(location.state);
  }, []);

  return (
    <>
    <h1 className="event-heading">Event</h1>
    <div className="event-container">
      

      {events &&
        events.map((event, i) => {
          return <EventCard key={i} event={event} />;
          console.log(event);
        })}
    </div>
    </>
  );
};

export default Event;
