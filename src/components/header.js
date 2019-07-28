import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;

  a,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`

const List = styled.ul`
  li {
    display: block;
    float: left;
    list-style: none;
    padding-right: 1rem;
  }
`

export default () => (
  <Navigation>
    <span>
      <Link to="/">Eva Maldonado</Link>
    </span>
    <List>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="#">Work</a>
        <ul>
          <li>
            <a href="#">Video Journalism</a>
          </li>
          <li>
            <a href="#">Narrative Shorts</a>
          </li>
          <li>
            <a href="#">Music Video</a>
          </li>
          <li>
            <a href="#">Writing</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">Resume</a>
      </li>
    </List>
  </Navigation>
)
