import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export default ({ data }) => {
  return (
    <Layout>
      <main
        css={css`
          display: flex;
          flex-wrap: wrap;
          background: pink;
        `}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div
            key={node.id}
            css={css`
              width: 50%;
              background: cornsilk;
            `}
          >
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
            <span>{node.frontmatter.title} </span>
          </div>
        ))}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/video-journalism/" } }
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
