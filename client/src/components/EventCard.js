import React from "react";
import "./EventCard.css"; // Assuming you have a CSS file for styling

const EventCard = ({ event }) => {
  const { name, date, location, description } = event;

  return (
    <div className="event-card">
      <h3 className="event-name">{name}</h3>
      <p className="event-date">{new Date(date).toLocaleDateString()}</p>
      <p className="event-location">{location}</p>
      <p className="event-description">{description}</p>
    </div>
  );
};

export default EventCard;
