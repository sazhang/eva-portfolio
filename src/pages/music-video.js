import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Eva Maldonado</title>
        <link rel="canonical" href="https://evahmaldonado.com/music-video" />
      </Helmet>
      <main
        css={css`
          padding: 0 1rem;
          @media (min-width: 1024px) {
            padding: 0 3rem;
          }
        `}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        ))}
      </main>
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
