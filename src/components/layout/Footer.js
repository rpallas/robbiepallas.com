import React from "react"

import { Container, Jumbotron, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

import "./footer.css"
import "../../fontawesome/css/all.min.css"

import SocialRow from "../SocialRow/SocialRow"

const Footer = () => (
  <Jumbotron fluid style={footer_styles}>
    <Container style={{ maxWidth: "960px" }}>
      <Row>
        <Col>
          <h3>Robbie Pallas</h3>
          <p style={{ color: "blueviolet", fontSize: "1.3rem" }}>
            {/*TODO: ADD A MAILTO-LINK */}
            robbie@robbiepallas.com
          </p>
          <br />
          <p style={{ fontSize: "1.3rem" }}>
            I'm a great developer that loves to build. I can help you grow your product.
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            textDecoration: "underline",
            fontSize: "1.4rem",
            marginBottom: "1rem",
            marginTop: "2rem",
          }}
        >
          Menu
        </Col>
      </Row>
      <Row>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/">
            <span className="link_styles">Home</span>
          </Link>
        </Col>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/about">
            <span className="link_styles">About</span>
          </Link>
        </Col>
        {/* <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/projects">
            <span className="link_styles">Projects</span>
          </Link>
        </Col> */}
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/blog">
            <span className="link_styles">Blog</span>
          </Link>
        </Col>
      </Row>
      <Row className="footer_social text-center">
        <Col>
          <SocialRow />
        </Col>
      </Row>
      <Row className="footer_social text-center">
        <Col>
          <a href="https://stackoverflow.com/users/459517/robbie">
            <img src="https://stackoverflow.com/users/flair/459517.png?theme=dark"
              width="208" height="58"
              alt="profile for Robbie at Stack Overflow"
              title="profile for Robbie at Stack Overflow"></img>
          </a>
        </Col>
      </Row>
      <Row className="text-center" style={{ marginTop: "3rem" }}>
        <Col>
          Robbie Pallas - {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">
            {" "}
            <span className="blueViolet">Gatsby</span>
          </a>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

const footer_styles = {
  marginTop: "3rem",
  marginBottom: "0",
  backgroundColor: "#000",
  color: "#fff",
  paddingBottom: "0",
  width: "100%",
}

export default Footer
