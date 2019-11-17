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
          href="https://evahmaldonado.com/video-journalism"
        />
      </Helmet>
      <section className="flex-parent">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="flex-child">
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
            <span>{node.frontmatter.title}</span>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/video-journalism/" } }
      sort: { fields: frontmatter___date, order: DESC }
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
