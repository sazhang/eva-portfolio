import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleFirstTab = this.handleFirstTab.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  handleFirstTab(e) {
    if (e.keyCode === 9) { // the "I am a keyboard user" key
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', this.handleFirstTab);
    }
  }

  toggleMenu() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleFirstTab);
  }

  render() {
    const menuClassName = 'menu' + (this.state.collapsed ? ' collapse' : '')

    return (
      <StaticQuery
        query={graphql`
          query ResumeFileQuery {
            file(extension: { eq: "pdf" }) {
              id
              publicURL
            }
          }
        `}
        render={data => (
          <header>
            <nav className="navbar">
              <div className="nav-mobile">
                <h3 className="home"><Link to="/">Eva Maldonado</Link></h3>
                <button className="hamburger" aria-label="menu" onClick={this.toggleMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
              </div>
              <ul className={menuClassName}>
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
                  <a href={data.file.publicURL} target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </li>
                <li>
                  <span className="dash">&mdash;</span>
                </li>
                <li className="social-media">
                  <a href="mailto:evahmaldonado@gmail.com" aria-label="Send Eva an email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E3440" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </a>
                </li>
                <li className="social-media">
                  <a href="https://www.linkedin.com/in/evamaldonado" aria-label="Link to Eva's LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E3440" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </li>
                <li className="social-media">
                  <a href="https://twitter.com/journalism4eva?lang=en" aria-label="Link to Eva's Twitter" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E3440" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        )}
      />
    )
  }
}

export default Header
