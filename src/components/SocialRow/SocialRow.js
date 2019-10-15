import React from "react"
import { Row, Col } from "react-bootstrap"

import "./socialRow.css"

export default () => (
  <Row className="jumbo_social text-center">
    <Col>
      <a
        style={{ color: "#000" }}
        href="https://www.github.com/rpallas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github hover_effect" />
      </a>
    </Col>
    <Col>
      <a
        style={{ color: "#000" }}
        href="https://www.linkedin.com/in/robbiepallas/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin hover_effect" />
      </a>
    </Col>
    <Col>
      <a
        style={{ color: "#000" }}
        href="https://twitter.com/robbiepallas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter hover_effect" />
      </a>
    </Col>
    <Col>
      <a
        style={{ color: "#000" }}
        href="https://stackoverflow.com/users/459517/robbie"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-stack-overflow hover_effect" />
      </a>
    </Col>
    <Col>
      <a
        style={{ color: "#000" }}
        href="https://www.goodreads.com/user/show/103995856-robbie-pallas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-goodreads hover_effect" />
      </a>
    </Col>
  </Row>
)
