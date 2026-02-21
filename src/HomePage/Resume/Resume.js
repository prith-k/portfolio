import React, { useState, useEffect } from "react";

import './Resume.css';
import cv from './cv.pdf'
const Resume = () => {
  console.log("resume");

  return (

<div className="Resume">
  <iframe src={cv} />
</div>
  );
}

export default Resume;
