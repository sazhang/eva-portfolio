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
        <Link to="/about">About</Link>
      </li>
      <li>
        <span aria-haspopup="true">Work</span>
        <ul aria-label="submenu">
          <li>
            <Link to="/video-journalism">Video Journalism</Link>
          </li>
          <li>
            <Link to="/narrative-shorts">Narrative Shorts</Link>
          </li>
          <li>
            <Link to="/music-video">Music Video</Link>
          </li>
          <li>
            <Link to="/writing">Writing</Link>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">Resume</a>
      </li>
    </ul>
  </Nav>
)

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  h3 {
    padding-top: 1rem;
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
    padding: 0 1rem;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
  }

  li > a:hover {
    text-decoration: underline;
  }

  li:hover,
  li:focus-within {
    text-decoration: underline;
  }

  li:focus-within a {
    outline: none;
  }

  ul li ul {
    background: white;
    visibility: hidden;
    opacity: 0;
    min-width: 8rem;
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
