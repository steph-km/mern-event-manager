import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "./HomePage.css"; // Optional CSS file

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from API (replace with actual API call)
    const fetchEvents = async () => {
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="home-page">
      <h1>Upcoming Events</h1>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
