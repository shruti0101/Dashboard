import React from 'react';
import './Schedule.css';

const Schedule = () => {
  return (
    <div className="schedule widget">
      <h3>Upcoming Sessions</h3>
      <ul>
        <li>10:00 AM - Client A</li>
        <li>11:30 AM - Client B</li>
        <li>1:00 PM - Client C</li>
      </ul>
    </div>
  );
};

export default Schedule;
