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
      <nav class="navbar">
        <div class="nav-mobile">
          <h2><Link to="/">Eva Maldonado</Link></h2>
          <button id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul class="menu" id="menu">
          <Link to="/about" activeStyle={{ textDecoration: "underline" }}>
            About
          </Link>
          <li class="dropdown">
            <span>Work</span>
            <ul class="work-menu">
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
            <span>&mdash;</span>
          </li>
          <li>
            <a href="mailto:evahmaldonado@gmail.com">Email</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/evamaldonado"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
          </a>
          </li>
          <li>
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
