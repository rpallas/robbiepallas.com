import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import "../../fontawesome/css/all.min.css"

import "./summary.css"

const Summary = () => (
  <Container className="content" fluid>
    <h3>Some things I use:</h3>
    <br />
    <Row className="text-center tech_icons">
      <Col>
        <i className="fab fa-js hover_effect" />
        <br />
        <span>JavaScript</span>
      </Col>
      <Col>
        <i className="fab fa-node hover_effect" />
        <br />
        <span>Node.js</span>
      </Col>
      <Col>
        <i className="fab fa-aws hover_effect" />
        <br />
        <span>AWS</span>
      </Col>
      <Col>
        <i className="fab fa-digital-ocean hover_effect" />
        <br />
        <span>DigitalOcean</span>
      </Col>
      <Col>
        <i className="fab fa-docker hover_effect" />
        <br />
        <span>Docker</span>
      </Col>
    </Row>
    <br />
    <Row className="text-center tech_icons">
      <Col>
        <i className="fab fa-react hover_effect" />
        <br />
        <span>React</span>
      </Col>
      <Col>
        <i className="fab fa-git hover_effect" />
        <br />
        <span>Git</span>
      </Col>
      <Col>
        <i className="fab fa-github hover_effect" />
        <br />
        <span>Github</span>
      </Col>
      <Col>
        <i className="fab fa-gitlab hover_effect" />
        <br />
        <span>Gitlab</span>
      </Col>
      <Col>
        <i className="fab fa-jira hover_effect" />
        <br />
        <span>Jira</span>
      </Col>
    </Row>
    <br />
    <Row className="text-center tech_icons">
      <Col>
        <i className="fab fa-npm hover_effect" />
        <br />
        <span>npm</span>
      </Col>
      <Col>
        <i className="fab fa-trello hover_effect" />
        <br />
        <span>Trello</span>
      </Col>
      <Col>
        <i className="fab fa-slack hover_effect" />
        <br />
        <span>Slack</span>
      </Col>
      <Col>
        <i className="fab fa-stack-overflow hover_effect" />
        <br />
        <span>Stack Overflow</span>
      </Col>
      <Col>
        <i className="fab fa-ethereum hover_effect" />
        <br />
        <span>Blockchain</span>
      </Col>
    </Row>
    <br />

    {/* <h4 className="goal_text text-center">
      My biggest goal as an Engineer is to never stop learning, and work on cool
      stuff. Here's a couple of things I'm good at:
    </h4>
    <Row style={{ marginTop: "1.8rem" }}>
      <Col>
        <h4 className="hover_effect">Tagline1</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quod maiores maxime suscipit assumenda vitae, incidunt
          doloremque ab voluptate, atque explicabo ea adipisci. Et quibusdam
          odit expedita quis officia minima!
        </p>
      </Col>
      <Col>
        <h4 className="hover_effect">Tagline2</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, modi
          reiciendis. Placeat quia facilis neque, corporis ullam maiores eaque
          quos autem voluptatibus, minus totam animi quo sint ea, atque sit?
        </p>
      </Col>
    </Row>
    <br />
    <Row>
      <Col>
        <h4 className="hover_effect">Tagline3</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          consequuntur. Ipsum deserunt veniam molestias odio rerum repudiandae
          officia quasi magnam at sint, amet commodi ad quisquam explicabo ab
          quia saepe?
        </p>
      </Col>
      <Col>
        <h4 className="hover_effect">Tagline4</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
          excepturi odio illum accusamus eum optio voluptatum corporis beatae
          impedit, molestias maxime obcaecati totam maiores eius voluptate ex
          animi minus aperiam!
        </p>
      </Col>
    </Row>
    <br />
    <h4 className="goal_text text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem
      praesentium tenetur blanditiis repellendus facilis maiores ducimus cumque,
      nesciunt nulla non ad excepturi magni eveniet voluptatum numquam libero
      error mollitia.
    </h4> */}
  </Container>
)

export default Summary
