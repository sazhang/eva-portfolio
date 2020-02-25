import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default () => (
  <StaticQuery
    query={graphql`
      query ImgQuery {
        headshot: file(relativePath: { eq: "headshot.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Eva Maldonado</title>
          <link rel="canonical" href="https://evahmaldonado.com/about" />
          <meta
            name="description"
            content="About Eva Maldonado - a videographer, writer, and director"
          />
          <html lang="en" amp />
        </Helmet>
        <section>
          <div className="flex-parent about">
            <div className="flex-child">
              <p>
                Hey there! I’m Eva, a videographer, writer, and editor
                specializing in high-quality work on tight deadlines.
                Previously, I worked for The Wall Street Journal and The Boston
                Globe, where I created breaking news videos for social media,
                short documentaries, and everything in between.
              </p>
              <p>
                My favorite projects prioritize creativity, innovation, and the
                art of learning something new. I am especially interested in how
                new mediums can amplify marginalized voices and instigate
                change.
              </p>
              <p>
                I’m well versed in a wide variety of video, and I would love to
                help out with your project, whether it’s remote or in the NYC
                area. Feel free to reach out!
              </p>
              <h4>
                Contact me:{" "}
                <a
                  href="mailto:evahmaldonado@gmail.com"
                  aria-label="Send Eva an email"
                >
                  EvaHMaldonado@gmail.com
                </a>
              </h4>
              <div>
                <div className="about-list">
                  <h4 className="about-list-header">Work featured in:</h4>
                  <ul>
                    <li>The Wall Street Journal</li>
                    <li>The Boston Globe</li>
                    <li>Sidney Gish</li>
                    <li>New England Conservatory</li>
                  </ul>
                </div>
                <div className="about-list">
                  <h4 className="about-list-header">Skills:</h4>
                  <ul>
                    <li>Premiere</li>
                    <li>DaVinci Resolve</li>
                    <li>Photoshop</li>
                    <li>AfterEffects</li>
                    <li>Lightroom</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-child">
              <Img
                fluid={data.headshot.childImageSharp.fluid}
                className="img-about"
              />
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
)
