import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

import CV from "/" //Import you CV file here!
import other from "/" //Import other downloadable here

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
          <MyButton text={"Other Downloadable"} URL={other} />
        </Row>
        <Row>
          <Col>
            <h3>Summary</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>I like to build, test and deploy things. Then I like to make pretty monitoring dashboards and study them</h5>
            <br />
            <p>
              I've been developing software professionally since 2004. Over the years I've gained experience in a
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
        {/* Position number 1*/}
        <Row>
          <Col>
            <h5>Software Engineer</h5>
          </Col>
        </Row>
        <Row>
          <Col>ACME Studios, Roadrunner City, US</Col>
          <Col>2015.09 - 2019.01</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iure
              nisi consequuntur provident officia odio vitae, nam neque natus
              debitis earum facere, quibusdam similique itaque sed, cumque
              aliquam voluptas quos.
            </p>
          </Col>
        </Row>
        <hr />
        {/* SW intern Position*/}
        <Row>
          <Col>
            <h5>Software Engineer Intern</h5>
          </Col>
        </Row>
        <Row>
          <Col>Mip Mip Co LTD, Roadrunner City, US&A</Col>
          <Col>2014.06 - 2014.09</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              ullam eius nihil porro itaque nobis facere. Impedit eos minima
              porro. Culpa, laboriosam! Qui quo provident aperiam et ullam odio
              ex.
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
        {/* Masters Degreee*/}
        <Row>
          <Col>
            <h5>MSc. ACME studies</h5>
          </Col>
        </Row>
        <Row>
          <Col>ACME University, ACME City, US</Col>
          <Col>2009.08 - 2015.08</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              <strong>Specialization:</strong>
              <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Tenetur quasi fugit accusamus officia sequi optio nulla,
              cupiditate in vitae natus odit nihil commodi corrupti mollitia
              necessitatibus iure eius praesentium? Fugit!
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
