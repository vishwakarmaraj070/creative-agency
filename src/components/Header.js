import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="darken-1 fixed-top navbar navbar-expand-lg navbar-light pink scrolling-navbar war white-text">
            <div className="container">
              <Link
                className="navbar-brand font-weight-bold title mb-0 p-0"
                to="/"
              >
                <svg viewBox="0 0 600 300">
                  {/* <!-- Symbol--> */}
                  <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="50%" dy=".35em">
                      A
                    </text>
                  </symbol>
                  {/* <!-- Duplicate symbols--> */}
                  <use className="text" xlinkHref="#s-text" />
                  <use className="text" xlinkHref="#s-text" />
                  <use className="text" xlinkHref="#s-text" />
                  <use className="text" xlinkHref="#s-text" />
                  <use className="text" xlinkHref="#s-text" />
                </svg>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto smooth-scroll">
                  <li className="nav-item">
                    <Link
                      className="font-weight-bold mb-0 nav-link title waves-effect waves-light white-text"
                      to="/work"
                      data-offset="90"
                    >
                      <svg>
                        <text
                          className="menu-text"
                          textAnchor="middle"
                          x="50%"
                          y="50%"
                          dy=".35em"
                        >
                          Work
                        </text>
                      </svg>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="font-weight-bold mb-0 nav-link title waves-effect waves-light white-text"
                      to="/services"
                      data-offset="90"
                    >
                      <svg>
                        <text
                          className="menu-text"
                          textAnchor="middle"
                          x="50%"
                          y="50%"
                          dy=".35em"
                        >
                          Services
                        </text>
                      </svg>
                      
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="font-weight-bold mb-0 nav-link title waves-effect waves-light white-text"
                      to="/culture"
                      data-offset="90"
                    >
                      <svg>
                        <text
                          className="menu-text"
                          textAnchor="middle"
                          x="50%"
                          y="50%"
                          dy=".35em"
                        >
                          Culture
                        </text>
                      </svg>
                      
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="font-weight-bold mb-0 nav-link title waves-effect waves-light white-text"
                      to="/magazine"
                      data-offset="90"
                    >
                      <svg>
                        <text
                          className="menu-text"
                          textAnchor="middle"
                          x="50%"
                          y="50%"
                          dy=".35em"
                        >
                          Magazine
                        </text>
                      </svg>
                      
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="border font-weight-bold hoverable mb-0 mx-3 nav-link px-4 title waves-effect waves-light white-text"
                      to="/contact"
                      data-offset="90"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                {/* <!-- Social Icon  --> */}
                <ul className="navbar-nav nav-flex-icons">
                  <li className="nav-item">
                    <a className="nav-link waves-effect waves-light">
                      <i className="fab fa-facebook-f title" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link waves-effect waves-light">
                      <i className="fab fa-twitter title" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link waves-effect waves-light">
                      <i className="fab fa-instagram title" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}
