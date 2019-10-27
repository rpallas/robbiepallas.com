import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div className="App">
    <Layout>
      <MyJumbo title={post.frontmatter.title} />
      <hr />
      <div dangerouslySetInnerHTML={{__html: post.html}} />
    </Layout>
  </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
