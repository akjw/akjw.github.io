import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p> Hello! I'm Asey, a Singapore-based software engineer with a background in education consulting and publishing. I'm passionate about building products that allow communities to share, connect, and create.
          </p>
          <h3>Skills</h3>
          <ul className="icons">
            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>postgreSQL</li>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>Express</li>
          </ul>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <h3><a href="https://streamlinersg.herokuapp.com/">Streamliner</a></h3>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
          Project management application for long-term projects with deadline countdowns, multi-phase options and deliverables tracking.
          </p>
          <p>
            Built with ReactJs, Node.js, Express and MongoDB
          </p>
          <ul className="icons">
            <li>
                <a
                  href="https://streamlinersg.herokuapp.com/"
                  className="icon fa-desktop"
                >
                  <span className="label">Demo</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/akjw/Streamliner"
                  className="icon fa-code"
                >
                  <span className="label">Source Code</span>
                </a>
              </li>
          </ul>
         
          <h3><a href="https://lunchbuddysg.herokuapp.com/">Lunch Buddy</a></h3>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          Scheduling application for making lunch appointments with other users. For people who dislike eating alone, or for those who need buddies for meal deals.
          </p>
          <p>
            Built with Ruby on Rails, postgreSQL, AWS S3 and using Google Maps API.
          </p>
          <ul className="icons">
            <li>
                <a
                  href="https://lunchbuddysg.herokuapp.com/"
                  className="icon fa-desktop"
                >
                  <span className="label">Demo</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/akjw/lunch-buddy"
                  className="icon fa-code"
                >
                  <span className="label">Source Code</span>
                </a>
              </li>
          </ul>
          <h3><a href="https://wrimo.herokuapp.com/">WriMo</a></h3>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <p>
          Online repository for original written works. Built for writers seeking inspiration, feedback, or an audience.
          </p>
          <p>
            Built with Node.js, Express, jQuery, MongoDB and socket.io.
          </p>
          <ul className="icons">
            <li>
                <a
                  href="https://wrimo.herokuapp.com/"
                  className="icon fa-desktop"
                >
                  <span className="label">Demo</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/akjw/WriMo"
                  className="icon fa-code"
                >
                  <span className="label">Source Code</span>
                </a>
              </li>
          </ul>
          <h3><a href="https://akjw.github.io/Slime-Farm/">Slime Farm</a></h3>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          Web-based game inspired by whack-a mole, with multiple difficulty levels and scorekeeping.
          </p>
          <p>
            Built with Javascript, HTML, and CSS.
          </p>
          <ul className="icons">
            <li>
                <a
                  href="https://akjw.github.io/Slime-Farm/"
                  className="icon fa-desktop"
                >
                  <span className="label">Demo</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/akjw/Slime-Farm"
                  className="icon fa-code"
                >
                  <span className="label">Source Code</span>
                </a>
              </li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <span className="image main">
            {/* <img src={pic03} alt="" /> */}
          </span>
          <p>
            Find me on the web:
          </p>
          <ul className="icons">
            <li>
              <a
                href="mailto:aseykoh@gmail.com"
                className="icon fa-envelope-open"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/akjw"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/asey-koh"
                className="icon fa-linkedin"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
