import React from 'react';

const Notification = ({ events }) => {
  if (!events) {
    return <p>No events available</p>;
  }

  return (
    <div className="notification">
      <h3>Upcoming Events</h3>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <strong>{event.name}</strong> - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
