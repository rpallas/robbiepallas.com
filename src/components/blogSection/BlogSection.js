import React from "react"

import { Container, Row, Col } from "react-bootstrap"

const BlogSection = props => (
  <React.Fragment>
    <Container fluid>
      {props.posts.map(post => (
        <Row>
          <Col>
            <a
              key={post.node.id}
              href={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </a>
          </Col>
        </Row>
      ))}
    </Container>
  </React.Fragment>
)

export default BlogSection
