import React, { useState, useEffect } from "react";

import './Projects.css';
import Card from './Card/Card'
let socket;
//location==url params
const Projects = () => {
  const testData=[{
    title: "Matchy Words",
    description:"Inspired by the hours of zoom sessions during the Covid-19 isolation: a real time browser multiplayer game. Essentially a free form apples to apples game. ",
    stack:["Node.js","React.js","express.js","Socket.io","Gcloud"],
    link:"https://matchywords.com/",
    github:"https://github.com/PrithipalKhalsa/matchy-words"
  },
  {
    title: "MP Watch",
    description:"This app scrapes the Mountain Project For Sale page once every hour and will send you an email if a key word is mentioned. ",
    stack:["Node.js","React.js","express.js","MongoDB","Gcloud",],
    link:"https://mp-watch.appspot.com/",
    github:"https://github.com/PrithipalKhalsa/mp-watch"

  },
    {
    title: "Spottvenn",
    description:"An app that helps you find spotify music that you don't know.",
    stack:["Node.js","React.js","Spotify API","Digital Ocean"],
    link:"http://spottvenn.com/",
    github:"https://github.com/PrithipalKhalsa/spotvenn"

  }]
  return (

<div className="Projects">
<div className="project-group">
<div className="project-title">
<h1>Personal Projects</h1>
<p className="project-subtitle">Here are a few of my favorite personal projects, any private repository can be revealed upon request. If you would like to collaberate on a project please do not hesitate to reach out.</p>
</div>
               {testData.map(({stack,title,description,link,github}) =>
                  <div className="card-holders" key={title}><Card stack={stack} title={title}description={description} link={link} github={github}/></div>)}
             </div>

</div>
  );
}

export default Projects;
