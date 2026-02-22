import React from "react";
import { Route, Switch } from "react-router-dom";

import UpcomingShows from './UpcomingShows/UpcomingShows';
import Gulp from './Gulp/Gulp';
import About from './About/About';
import OtherProjects from './OtherProjects/OtherProjects';
import Climbing from './Climbing/Climbing';
import Navigation from './Navigation/Navigation';

import './HomePage.css';

const HomePage = () => {
  return (
    <div className="HomePage">
      <Navigation />
      <div className="frame">
        <Switch>
          <Route path="/upcoming-shows" component={UpcomingShows} />
          <Route path="/gulp" component={Gulp} />
          <Route path="/about" component={About} />
          <Route path="/other-projects" component={OtherProjects} />
          <Route path="/climbing" component={Climbing} />
          <Route exact path="/" component={About} />
          <Route component={About} />
        </Switch>
      </div>
    </div>
  );
};

export default HomePage;
