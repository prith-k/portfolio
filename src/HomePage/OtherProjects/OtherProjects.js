import React from 'react';
import './OtherProjects.css';
import Card from '../Projects/Card/Card';

/**
 * OTHER PROJECTS — Edit the projects array below.
 * Each project: title, description, stack (optional tags), link, github (optional).
 * Leave github empty or same as link if not applicable.
 */
const OtherProjects = () => {
  const projects = [
    {
      title: 'Project One',
      description:
        'Short description of this performance project, show, or collaboration. What it is and why it matters.',
      stack: ['Theater', 'Comedy', '2025'],
      link: 'https://example.com',
      github: '',
    },
    {
      title: 'Project Two',
      description:
        'Another project or show. You can use stack as tags (e.g. venue, year, format).',
      stack: ['Solo', 'Improv'],
      link: '#',
      github: '',
    },
    // Add more projects by copying an object above and editing.
  ];

  return (
    <div className="OtherProjects">
      <div className="project-group">
        <div className="project-title">
          <h1>Other Projects</h1>
          <p className="project-subtitle">
            {/* EDIT: Intro for your other performance projects */}
            Other shows, collaborations, and creative projects.
          </p>
        </div>
        {projects.map(({ stack, title, description, link, github }) => (
          <div className="card-holders" key={title}>
            <Card
              stack={stack}
              title={title}
              description={description}
              link={link || '#'}
              github={github || link || '#'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
