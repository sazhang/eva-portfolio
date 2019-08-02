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
        <link rel="canonical" href="https://evahmaldonado.com/" />
      </Helmet>
      <main
        css={css`
          padding: 0 1rem;
          @media (min-width: 1024px) {
            padding: 0 3rem;
          }
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
