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
          <h2>About</h2>
          <div className="flex-parent about">
            <div className="flex-child">
              <p>
                Eva is a videographer, writer, and director who is currently working
                as a summer intern for the video team at the Wall Street Journal.
                She graduated in May from Northeastern University in Boston, where
                she studied journalism and media production. She previously worked
                as a videographer at The Boston Globe for a year and a half, where
                she created breaking news videos for social media, short-form
                documentaries, and everything in between. Eva is especially
                interested in documentaries and serial content, and how these
                mediums can amplify marginalized voices and instigate change. She
                loves a good soft focus, iced coffee with an everything bagel, every
                cat, Kevin MacLeod, female villains, magic realism, and magic (not
                realism).
              </p>
            </div>
            <div className="flex-child">
              <Img fluid={data.headshot.childImageSharp.fluid} className="img-about" />
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
)
