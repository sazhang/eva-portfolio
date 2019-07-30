import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MainVideos, HalfFlexVideo, VideoTitleWrapper } from "../styles/global"

export default ({ data }) => {
  return (
    <Layout>
      <MainVideos>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <HalfFlexVideo key={node.id}>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
            <VideoTitleWrapper>
              <span>{node.frontmatter.title}</span>
            </VideoTitleWrapper>
          </HalfFlexVideo>
        ))}
      </MainVideos>
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
