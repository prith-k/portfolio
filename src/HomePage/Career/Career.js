import React, { useState, useEffect } from "react";

import './Career.css';
import Timeline from './Timeline/Timeline'

const Career = () => {
  const jobs=[{
    title: "Achieve Internet",
    subtitle:"Junior Software Engineer",
    description:"In my previous position at Achieve Internet, I developed web-based applications for large corporations. My experience tailoring applications to specific client needs has allowed me to be adaptive with new technologies and flexible with sudden changes. This experience has also allowed me to quickly adapt to new teams and projects.",
    bullets:["Node.js","React.js","express.js","Socket.io","Gcloud","Nodemailer"],
    date:"2018-2019",
  },
    {
    title: "San Diego State University",
    subtitle:"BS in Computer Science",
    description:"Four Year computer science degree with related courses including: Software Engineering, Speech Processing, Computer Architecture, and Algorithms. I also worked as an instructor for the University teaching for credit outdoor education classes.",
    bullets:["Python","Django","Spotify API","Digital Ocean"],
    date:"2014-2018",

  }]
  return (

<div className="Career">
<h1>Professional</h1>
  <div className="timeline">
    {jobs.map(({subtitle,title,description,date}) =>
       <Timeline  key={title} subtitle={subtitle} title={title} description={description} date={date}/>)}

  </div>
</div>
  );
}

export default Career;
