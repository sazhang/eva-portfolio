import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

export default () => (
  <Nav role="navigation">
    <h3>
      <Link to="/">Eva Maldonado</Link>
    </h3>
    <ul>
      <li>
        <Link to="/about" activeStyle={{ textDecoration: "underline" }}>
          About
        </Link>
      </li>
      <li>
        <span aria-haspopup="true">Work</span>
        <ul aria-label="submenu">
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
        <a href="#">Resume</a>
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
  </Nav>
)

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 1;
  margin: 0 1rem;
  @media (min-width: 1024px) { 
    margin: 0 0 2rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
    float: left;
    padding: 0 0 0 1rem;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
  }

  li > a:hover {
    text-decoration: underline;
  }

  ul li ul {
    background: white;
    visibility: hidden;
    opacity: 0;
    min-width: 10rem;
    position: absolute;
    transition: all 0.5s ease;
    left: 0;
    display: none;
    padding: 1rem 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  ul li:hover > ul,
  ul li:focus-within > ul,
  ul li ul:hover,
  ul li ul:focus {
    visibility: visible;
    opacity: 1;
    display: block;
  }

  ul li ul li {
    clear: both;
    width: 100%;
  }
`
