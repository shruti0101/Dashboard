import React from 'react';
import './ClientActivity.css';

const ClientActivity = () => {
  return (
    <div className="client-activity widget">
      <h3>Client Activity</h3>
      <ul>
        <li>Client A completed Workout 1</li>
        <li>Client B logged a meal</li>
        <li>Client C missed a session</li>
      </ul>
    </div>
  );
};

export default ClientActivity;
