import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

const BlogSection = props => (
  <React.Fragment>
    <Container fluid>
      {props.posts.map(post => (
        <Row>
          <Col>
            <Link to={post.node.frontmatter.path} className="menu_link">
              {post.node.frontmatter.title}
            </Link>
          </Col>
        </Row>
      ))}
    </Container>
  </React.Fragment>
)

export default BlogSection
