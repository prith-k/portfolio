import React, { useState, useEffect } from "react";

import './Contact.css';
import Card from '../Projects/Card/Card'
let socket;
//location==url params
const Contact = () => {
  const [info, toggleInfo] = useState(0);
  const infoMap=[
    {title:"Email",
      info:"Easiest way to get in contact with me is email. I usually reply within an hour or two on the weekdays.",
    },
    {title:"Linkedin",
      info:"Linkedin is the best place to contact me for open positions or simply to network",
    },
    {
      title:"GitHub",
      info:"If you would like to contribute to a project or want to work on a new project together, please reach out. I would love to collaborate on something fun!",
    },
    {
      title:"Instagram",
      info:"You can reach out to me on Instagram for rock climbing specifically. Contact me if you: want to climb with me or want to chat about training, gear, projects, etc. I've climbed El cap 4 times, 5.13d trad leads, and I was a guide for a few years. "
    },
    {
      title:"Facebook",
      info:"Probably the least effective platform to contact me, but if you are interested in wishing me happy birthday it will remind you."
    },



      ]
  return (

<div className="Contact">
<h1>Contact Me</h1>
<div className="contact-content">
<div className="contact-icons">
<a target="_blank" href={"mailto:prithipalpsk@gmail.com"} onMouseEnter={()=>toggleInfo(0)}>   <i className="fa fa-envelope fa-4x" aria-hidden="true"></i></a>
<a target="_blank" href={"https://www.linkedin.com/in/prithipal-khalsa-2b83a1133/"} onMouseEnter={()=>toggleInfo(1)}>   <i className="fa fa-linkedin-square fa-4x" aria-hidden="true"></i></a>
<a target="_blank" href={"https://github.com/PrithipalKhalsa"} onMouseEnter={()=>toggleInfo(2)}>   <i className="fa fa-github fa-4x" aria-hidden="true"></i></a>
<a target="_blank" href={"https://www.instagram.com/parkinglot.prith//"} onMouseEnter={()=>toggleInfo(3)}>  <i className="fa fa-instagram fa-4x " aria-hidden="true"></i></a>
<a target="_blank" href={"https://www.facebook.com/prithipal.the.fish"} onMouseEnter={()=>toggleInfo(4)}>   <i className="fa  fa-facebook-square fa-4x" aria-hidden="true"></i></a>

</div>
  <div className="contact-info">
    <div className="info">
    <h1>{infoMap[info]["title"]}</h1>
    {infoMap[info]["info"]}
    </div>
  </div>
  </div>
</div>
  );
}

export default Contact;
