import React from 'react';
import { Container } from 'react-bootstrap';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <Container >
    <div className="event-card">
      <div className="event-header">
        <h3>{event.summary}</h3>
        <p>{event.updated}</p>
      </div>
      <div className="event-details">
        <p><b>Start Time:</b> {event.start.dateTime}</p>
        <p><b>End Time:</b> {event.end.dateTime}</p>
        <p><b>Description:</b> {event.description}</p>
      </div>
    </div>
    </Container>
  );
};

export default EventCard;
