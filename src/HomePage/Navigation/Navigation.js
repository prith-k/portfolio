import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './Navigation.css';

const navItems = [
  { path: '/upcoming-shows', label: 'Upcoming Shows', className: 'shows' },
  { path: '/gulp', label: 'GULP!', className: 'gulp' },
  { path: '/about', label: 'About', className: 'about' },
  { path: '/climbing', label: 'Climbing', className: 'climbing' },
];

const Navigation = () => {
  const history = useHistory();
  const location = useLocation();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 770);
  const pathname = location.pathname;

  const updateMedia = () => {
    setDesktop(window.innerWidth > 770);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const isActive = (path) => {
    if (path === '/about') return pathname === '/' || pathname === '/about';
    return pathname === path;
  };

  const sidebar = (
    <div className="Navigation">
      <div className="bio">
        <div className="me">
          <img src={`${process.env.PUBLIC_URL || ''}/profile.png`} alt="Prith" />
        </div>
        <h2>Prith</h2>
      </div>
      <div className="menu">
        {navItems.map(({ path, label }) => (
          <div
            key={path}
            className={['nav-item', isActive(path) ? 'nav-item-active' : ''].filter(Boolean).join(' ')}
            onClick={() => history.push(path)}
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
