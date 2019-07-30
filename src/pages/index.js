import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export default ({ data }) => {
  return (
    <Layout>
      <main
        css={css`
          padding: 0 3rem;
        `}
      >
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "index" } }) {
      id
      html
    }
  }
`
