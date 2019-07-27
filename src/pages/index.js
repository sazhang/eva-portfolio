import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Bio />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Oy53FMAZiM4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title}{" "}
            </h3>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`