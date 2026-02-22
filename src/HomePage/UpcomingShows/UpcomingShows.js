import React from 'react';
import './UpcomingShows.css';

/**
 * UPCOMING SHOWS — Edit the shows array below to add/change upcoming performances.
 * Each show needs: date, venue, location, time (optional), link (optional), description (optional).
 */
const UpcomingShows = () => {
  const shows = [
    {
      date: 'Thursday, March 5, 2026',
      venue: 'GULP! Work in Progress',
      location: 'Denver, CO',
      time: '7:30 PM',
      link: 'https://www.idiottheatre.com/freaky-weeky-calendar/gulp-wip',
      description: 'Idiot Theatre\'s Freaky Weeky at Buntport Theater.',
    },
    {
      date: 'March 18–28, 2026',
      venue: 'Pittsburgh Fringe Festival',
      location: 'Pittsburgh, PA',
      link: 'https://pittsburghfringe.org/events/gulp/',
      description: 'GULP!',
    },
    {
      date: 'May 12–24, 2026',
      venue: 'San Diego Fringe Festival',
      location: 'San Diego, CA',
      description: 'GULP! — Ticket link coming soon.',
    },
    {
      date: 'June 3–7, 2026',
      venue: 'Denver Fringe Festival',
      location: 'Denver, CO',
      description: 'GULP! — Ticket link coming soon.',
    },
    {
      date: 'June 11–28, 2026',
      venue: 'Hollywood Fringe Festival',
      location: 'Los Angeles, CA',
      description: 'GULP! — Ticket link coming soon.',
    },
    {
      date: 'August 7–31, 2026',
      venue: 'Edinburgh Fringe Festival',
      location: 'Edinburgh, UK',
      description: 'GULP!',
    },
  ];

  return (
    <div className="UpcomingShows">
      <h1>Upcoming Shows</h1>
      <p className="UpcomingShows-intro">
      </p>
      <div className="shows-list">
        {shows.map((show, i) => (
          <div className="show-item card-border" key={i}>
            <div className="show-date">{show.date}</div>
            <h2 className="show-venue">{show.venue}</h2>
            <div className="show-meta">
              {show.location}
              {show.time && ` • ${show.time}`}
            </div>
            {show.description && <p className="show-description">{show.description}</p>}
            {show.link && show.link !== '#' && (
              <a href={show.link} target="_blank" rel="noopener noreferrer" className="show-link">
                Tickets / More info
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="UpcomingShows-intro">
        If you are interested in booking, please reach out via email or instagram :)
      </div>
    </div>
  );
};

export default UpcomingShows;
