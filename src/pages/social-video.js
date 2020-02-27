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
          href="https://evahmaldonado.com/social-video"
        />
        <meta
          name="description"
          content="Twitter series for The Wall Street Journal by Eva Maldonado - a videographer, writer, and director"
        />
        <html lang="en" amp />
      </Helmet>
      <section>
        <h2>Social Video</h2>
        <h3>The Numbers</h3>
        <p>During my time at The Wall Street Journal, I created a weekly animated Twitter video series based on Jo Craven McGinty’s column The Numbers.</p>
        <div className="flex-parent">
          {data.theNumbers.edges.map(({ node }) => (
            <div key={node.id} className="flex-child">
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          ))}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h3>Your Money</h3>
        <p>I also filmed and edited daily stock market update videos, as well as personal finance advice videos for the Your Money Twitter series.</p>
        <div className="flex-parent">
          {data.yourMoney.edges.map(({ node }) => (
            <div key={node.id} className="flex-child">
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
    theNumbers: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/social-video/" }, frontmatter: { category: { eq: "the-numbers" } } }
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
    yourMoney: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/social-video/" }, frontmatter: { category: { eq: "your-money" } } }
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
