import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MainVideos, HalfFlexVideo } from "../styles/global"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Eva Maldonado</title>
        <link
          rel="canonical"
          href="https://evahmaldonado.com/narrative-shorts"
        />
      </Helmet>
      <MainVideos>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <HalfFlexVideo key={node.id}>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </HalfFlexVideo>
        ))}
      </MainVideos>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/narrative-shorts/" } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`
