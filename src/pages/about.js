import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

import CV from "../downloads/RobbiePallas_CV.pdf"

export default () => (
  <div className="App">
    <Layout>
      <MyJumbo
        title={"tldr; About me."}
        body={
          "So you are looking for a professional, communicative & punctual software engineer who likes to keep productive."
        }
        body2={""}
      />
      <hr />
      <Container fluid>
        <Row style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>
          <MyButton text={"CV download"} URL={CV} />
        </Row>
        <Row>
          <Col>
            <h3>Summary</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>I like to build, test and deploy things. Then I like to make monitoring dashboards to study those things</h5>
            <br />
            <p>
              I've been developing software professionally since 2003. Over the years I've gained experience in a
              variety of domains including, health care, telecoms, games and online video services.
              <br />
              <br />
              I've worked on projects including <a href="https://piksel.com/">VOD/OVP platforms</a>,
              video metadata, identity and access, <a href="https://www.youtube.com/watch?v=hxQ4Cd-_RNw">AAA console games</a>,
              mobile games, high traffic public websites and more.
              <br />
              <br />
              I have a passion for writing clean, maintainable code thats well tested. I enjoy
              developing strong working friendships with my colleagues and collaborating to make
              awesome products that make users smile.
            </p>
          </Col>
        </Row>
        <hr />
        {/* This is the beginning of the career section*/}
        <Row>
          <Col>
            <h3>Past work experience</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Tech Lead/Product Owner</h5>
          </Col>
        </Row>
        <Row>
          <Col><a target="_blank" rel="noopener noreferrer" href="https://piksel.com">Piksel Ltd</a></Col>
          <Col>May 2014 - Present</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              At Piksel, we design, build and run high-end video and entertainment platforms.
            </p>
            <p style={{ marginTop: "1rem" }}>
              I work in a globally distributed agile development team where we develop backend
              API systems for video metadata management.
            </p>
            <p style={{ marginTop: "1rem" }}>
              As Product Owner I’m responsible for developing API solutions that solve problems
              for our customers. I work with other POs and the Head of Product to prioritise
              and coordinate the release of features. I work closely with my team to design,
              develop and run these APIs at high scale for global clients.
            </p>
            <p style={{ marginTop: "1rem" }}>
              As Tech Lead I'm responsible for the technical leadership of a highly skilled
              development team. We build libraries and services enabling quicker development
              of business solutions.
            </p>
            <ul>
              <li>REST microservice APIs built using node.js and hapi.js</li>
              <li>Services - Identity, Registry, Notification, Geo</li>
              <li>Cassandra/Solr (Datastax DSE), MongoDb</li>
              <li>Docker, Marathon, Kubernetes</li>
              <li>AWS - EC2, S3, ECS, EKS, API Gateway, DynamoDB, Lambda, Cognito</li>
              <li>EFK Stack, Grafana/Kibana, Dyantrace</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h5>Tools Developer - Central Tech</h5>
          </Col>
        </Row>
        <Row>
          <Col><a target="_blank" rel="noopener noreferrer" href="http://www.codemasters.com">Codemasters</a></Col>
          <Col>July 2007 - July 2010</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Tools development for <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=mrxjvR3Rk18">Operation
              Flashpoint</a> series of games.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Agile development methodologies (Scrum) - Large team of 100+ developers.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Projects include: Visual Effects Editor, Mission Editor, World Editor, Asset Pipelines, Exporters, Data Visualization, Build Deployment and Automatic Branching Tools.
              .Net, C#, C++, Winforms, Silverlight, Wpf, Python, Perforce.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Development using X360 and PS3 development kits.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h5>Lead Web Services Developer</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <a target="_blank" rel="noopener noreferrer" href="https://www.crunchbase.com/organization/caperfly">Caperfly</a>
            <br />
            100% Remote
          </Col>
          <Col>Aug 2012 - Dec 2013</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              I was with Caperfly through the development of 2 iOS trivia games
              PredictThis and Big Brother - The Official Game.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Responsible for all server side development and cloud management (AWS & Scalr)
              for the backend of the companies mobile games. This includes the setup and
              configuration of the entire server stack, including: installing web servers,
              deployment, scaling, load balancing, load testing, DNS management, logging
              and monitoring.
            </p>
            <p style={{ marginTop: "1rem" }}>
              I was also tasked with the development and maintenance of our web service APIs
              and a selection of in-house tools, such as web based editing of game data. For
              this we used a variety of technologies including MongoDb (game data), Php
              (main game backend services) and NodeJs (additional services), Javascript
              SPA using KnockoutJS (editor).
            </p>
          </Col>
        </Row>
        <hr />
        {/* This is the beginning of the education section*/}
        <Row>
          <Col>
            <h3>Education</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Computer Science Degree</h5>
          </Col>
        </Row>
        <Row>
          <Col>Sheffield Hallam University, UK</Col>
          <Col>2000 - 2004</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              <strong>Specialization: Software Engineering</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
