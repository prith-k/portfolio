import React, { useState, useEffect } from "react";
import { slide as Menu } from 'react-burger-menu';

import './Navigation.css';

const Navigation = ({ switchFrame, frame }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 770);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 770);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const navItems = [
    { id: 'UpcomingShows', label: 'Upcoming Shows', className: 'shows' },
    { id: 'Gulp', label: 'GULP!', className: 'gulp' },
    { id: 'About', label: 'About', className: 'about' },
    { id: 'Climbing', label: 'Climbing', className: 'climbing' },
  ];

  const sidebar = (
    <div className="Navigation">
      <div className="bio">
        <div className="me">
          <img src={`${process.env.PUBLIC_URL || ''}/profile.png`} alt="Prith" />
        </div>
        <h2>Prith</h2>
        <div>Performer</div>
      </div>
      <div className="menu">
        {navItems.map(({ id, label }) => (
          <div
            key={id}
            className={['nav-item', frame === id ? 'nav-item-active' : ''].filter(Boolean).join(' ')}
            onClick={() => switchFrame(id)}
          >
            {label}
          </div>
        ))}
      </div>
      <div className="contact-menu">
        <a target="_blank" rel="noopener noreferrer" href="mailto:prithipalpsk@gmail.com"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/parkinglot.prith/"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
      </div>
    </div>
  );

  return (
    <div>
      {!isDesktop && (
        <Menu>
          {sidebar}
        </Menu>
      )}
      {isDesktop && sidebar}
    </div>
  );
}

export default Navigation;
