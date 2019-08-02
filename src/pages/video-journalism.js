import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MainVideos, HalfFlexVideo, VideoTitleWrapper } from "../styles/global"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Eva Maldonado</title>
        <link
          rel="canonical"
          href="https://evahmaldonado.com/video-journalism"
        />
      </Helmet>
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
