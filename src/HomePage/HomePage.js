import React, { useState, useEffect } from "react";

import UpcomingShows from './UpcomingShows/UpcomingShows';
import Gulp from './Gulp/Gulp';
import About from './About/About';
import OtherProjects from './OtherProjects/OtherProjects';
import Climbing from './Climbing/Climbing';
import Navigation from './Navigation/Navigation';

import './HomePage.css';

const VALID_FRAMES = ['UpcomingShows', 'Gulp', 'About', 'OtherProjects', 'Climbing'];

const getFrameFromHash = () => {
  const hash = window.location.hash.slice(1);
  return VALID_FRAMES.includes(hash) ? hash : 'About';
};

const HomePage = () => {
  const [frame, toggleFrame] = useState(getFrameFromHash);

  useEffect(() => {
    const onHashChange = () => toggleFrame(getFrameFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const switchFrame = (name) => {
    if (name !== frame) {
      toggleFrame(name);
      window.location.hash = name;
    }
  };

  return (
    <div className="HomePage">
      <Navigation switchFrame={switchFrame} frame={frame} />
      <div className="frame">
        {frame === "UpcomingShows" && <UpcomingShows />}
        {frame === "Gulp" && <Gulp />}
        {frame === "About" && <About />}
        {frame === "OtherProjects" && <OtherProjects />}
        {frame === "Climbing" && <Climbing />}
      </div>
    </div>
  );
}

export default HomePage;
