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
          href="https://evahmaldonado.com/narrative-shorts"
        />
      </Helmet>
      <section className="flex-parent">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="flex-child">
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        ))}
      </section>
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
