import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './Card.css';
import gitCat from './git.png'

const Card = ({stack,title,description,link,github}) => {

  return (

<div className="Card">

  <div className="card-border">
  <div className="block-text">
      <h1 className="title">{title}</h1>
      <div className="descripition">{description}</div>
      <div className="stack">

      {stack && stack.map((item, i) => (
        <p className="stack-item" key={i}>{item}</p>
      ))}

      </div>
      <div className="card-nav">
        {github && github !== '#' && (
          <a href={github} target="_blank" rel="noopener noreferrer"><img src={gitCat} alt="GitHub" /></a>
        )}
        <a href={link} target="_blank" rel="noopener noreferrer" className="proj-link">Check it out</a>
      </div>
    </div>
  </div>
</div>
  );
}

export default Card;
