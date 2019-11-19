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
        <link rel="canonical" href="https://evahmaldonado.com/" />
        <meta 
          name="description" 
          content="Eva is a videographer, writer, and director who is currently working as a summer intern for the video team at the Wall Street Journal." 
        />
        <html lang="en" amp />
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
