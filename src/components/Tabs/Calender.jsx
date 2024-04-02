import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsData = [
      {
        id: 1,
        title: 'Event 1',
        start: new Date('2024-04-10'),
        end: new Date('2024-04-11'),
      },
      {
        id: 2,
        title: 'Event 2',
        start: new Date('2024-04-15'),
        end: new Date('2024-04-16'),
      },
    ];

    setEvents(eventsData);
  }, []);

  return (
    <div className='bg-white' style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '50px' }}
      />
    </div>
  );
};

export default MyCalendar;
