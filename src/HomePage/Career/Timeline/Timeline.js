import React, { useState, useEffect } from "react";

import './Timeline.css';

const Timeline = ({subtitle,title,description,bullets,date}) => {

  return (
    <div className="time-item">
      <div className="time-date">
      <p>{date}</p>
      </div>
      <div className="time-job">
        <h3>{title}</h3>
        <p className="time-subtitle">{subtitle}</p>
        <p>{description}</p>
      </div>

    </div>
  );
}

export default Timeline;
