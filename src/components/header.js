import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const resume = useStaticQuery(graphql`
    {
      file(extension: { eq: "pdf" }) {
        id
        publicURL
      }
    }
  `)

  return (
    <header>
      <nav className="navbar">
        <div className="nav-mobile">
          <h3 className="home"><Link to="/">Eva Maldonado</Link></h3>
          <button id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className="menu" id="menu">
          <li>
            <Link to="/about" activeStyle={{ textDecoration: "underline" }}>
              About
            </Link>
          </li>
          <li className="dropdown">
            <span>Work</span>
            <ul className="work-menu">
              <li>
                <Link
                  to="/video-journalism"
                  activeStyle={{ textDecoration: "underline" }}
                >
                  Video Journalism
                </Link>
              </li>
              <li>
                <Link
                  to="/narrative-shorts"
                  activeStyle={{ textDecoration: "underline" }}
                >
                  Narrative Shorts
                </Link>
              </li>
              <li>
                <Link
                  to="/music-video"
                  activeStyle={{ textDecoration: "underline" }}
                >
                  Music Video
                </Link>
              </li>
              <li>
                <Link to="/writing" activeStyle={{ textDecoration: "underline" }}>
                  Writing
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href={resume.file.publicURL} target="_blank">
              Resume
          </a>
          </li>
          <li>
            <span className="dash">&mdash;</span>
          </li>
          <li className="social-media">
            <a href="mailto:evahmaldonado@gmail.com">Email</a>
          </li>
          <li className="social-media">
            <a
              href="https://www.linkedin.com/in/evamaldonado"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
          </a>
          </li>
          <li className="social-media">
            <a
              href="https://twitter.com/journalism4eva?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
          </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
