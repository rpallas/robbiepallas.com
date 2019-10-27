import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import BlogSection from "../components/blogSection/BlogSection"

import { graphql } from 'gatsby'

//import bootstrap styles
import "../bootstrap/css/bootstrap.min.css"

//import my custom styles
import "./index.css"

export default ({ data }) => (
  <div className="App">
    <Layout>
      <MyJumbo
        title={"Blog"}
        body={"A few of my ramblings"}
      />
      <hr />
      <BlogSection posts={data.allMarkdownRemark.edges}/>
    </Layout>
  </div>
)

export const postQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
