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

        <div className="Gulp-reviews card-border">
          <h2>Reviews</h2>
          <blockquote className="Gulp-review">
            <p>“A wildly inventive piece of physical comedy that turns absurdity into something playful, tender, and unexpectedly heartfelt.”</p>
            <cite>— TC M.</cite>
          </blockquote>
          <blockquote className="Gulp-review">
            <p>“I loved the physicality, and Prith's acting was heartfelt and genuine. This show felt so relatable and was extremely clever with how everything was choreographed.”</p>
            <cite>— V.</cite>
          </blockquote>
          <blockquote className="Gulp-review">
            <p>“The eulogy wrecked me. I have a banana shaped hole in my heart now too.”</p>
            <cite>— NLB</cite>
          </blockquote>
          <blockquote className="Gulp-review">
            <p>“The originality of the show was impressive, the physical comedy, the timing and the facial expressions were spot on”</p>
            <cite>— SE</cite>
          </blockquote>
          <blockquote className="Gulp-review">
            <p>“Gulp was hilarious. Prith is just such a unique character and he really makes me crack up in a way unlike anything I've experienced.”</p>
            <cite>— JWB</cite>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Gulp;
