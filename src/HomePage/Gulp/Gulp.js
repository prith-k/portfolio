import React from 'react';
import './Gulp.css';

const base = process.env.PUBLIC_URL || '';

/**
 * GULP! — Edit the content below for your GULP! project/show.
 * Update title, tagline, description, and any links or media.
 */
const Gulp = () => {
  return (
    <div className="Gulp">
      <h1>GULP!</h1>

      <div className="Gulp-content">
        <div className="bio-entry card-border gulp-main">
          <h2>About GULP!</h2>
          {/* EDIT: Main description of GULP! */}
          <p>
          GULP! Is an alternative-comedy clown play written and performed by Prith Khalsa and directed by Todd Sullivan. Blending game based theater and written material, GULP is an semi-interactive saga of a man who falls in a banana. It is on tour in 2026 and you can find more information and dates about it on this website.
          </p>
        </div>
        <section className="Gulp-poster" aria-label="GULP! poster">
        <img
          src={`${base}/media/gulp/gulp-poster.png`}
          alt="GULP! — An alt-comedy play by Prith Khalsa, directed by Todd Sullivan"
        />
      </section>
      </div>
    </div>
  );
};

export default Gulp;
