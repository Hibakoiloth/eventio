import React, { useState, useEffect } from 'react';
import Notification from './Notification';

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsData = [
      {
        id: 1,
        name: 'Event 1',
        date: 'April 10, 2024',
      },
      {
        id: 2,
        name: 'Event 2',
        date: 'April 15, 2024',
      },
    ];

    const upcomingEvents = eventsData.filter(event => new Date(event.date) > new Date());

    setEvents(upcomingEvents);
  }, []);

  return (
    <div className="dashboard bg-white p-4">
      {/* Other dashboard content */}
      {events.length > 0 ? (
        <Notification events={events} />
      ) : (
        <p>No upcoming events</p>
      )}
    </div>
  );
};

export default Dashboard;
