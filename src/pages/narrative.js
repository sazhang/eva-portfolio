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
        <link
          rel="canonical"
          href="https://evahmaldonado.com/narrative-video"
        />
        <meta
          name="description"
          content="Narrative shorts by Eva Maldonado - a videographer, writer, and director"
        />
        <html lang="en" amp />
      </Helmet>
      <section>
        <h2>Narrative Video</h2>
        <div className="flex-parent">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className="flex-child">
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
              <span className="video-caption">{node.frontmatter.title}</span>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/narrative/" } }) {
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
