import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>Hey, I'm a Software developer from the UK, living in York.</h1>
      <br />
      <h3>
        Right now I'm using Javascript, Node.js, and hapi.js to
        design and build backend api systems.
      </h3>
      <p>
        Let's chat{" "}
        <a href="mailto:robbie@robbiepallas.com">
          <span style={{ color: "blueviolet" }}>robbie@robbiepallas.com</span>
        </a>
      </p>
    </div>
    <div>
      <SocialRow />
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
