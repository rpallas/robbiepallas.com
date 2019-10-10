import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"
// import SocialRow from "../SocialRow/SocialRow"

import Gravatar from 'react-gravatar'

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <Gravatar email="robbie@robbiepallas.com" size={200}/>
      <h1>Hey, I'm a software developer from the UK, living in York.</h1>
      <br />
      <h3>
        Recently I've been using Javascript, node.js, and hapi.js to
        build and run API services in Docker on AWS
      </h3>
      <p>
        Some things I do: CI/CD, Testing, Serverless, REST, NoSQL, Monitoring & Observability,
        Devops, Leading, Hiring, Mentoring, Iterating, Communicating ...
      </p>
    </div>
    {/* <div>
      <SocialRow />
    </div> */}
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
