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
        <link rel="canonical" href="https://evahmaldonado.com/writing" />
      </Helmet>
      <main>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="writing" key={node.id}>
            <span>
              {node.frontmatter.date} - {node.frontmatter.publisher}
            </span>
            <br />
            <a
              href={node.frontmatter.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {node.frontmatter.title}
            </a>
          </div>
        ))}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/writing/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            publisher
            link
          }
        }
      }
    }
  }
`
