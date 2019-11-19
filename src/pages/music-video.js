import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Eva Maldonado</title>
        <link rel="canonical" href="https://evahmaldonado.com/music-video" />
        <html lang="en" amp />
      </Helmet>
      <section>
        <h2>Music Video</h2>
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/music-video/" } }
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
