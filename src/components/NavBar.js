import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
          <div className="container-fluid">
            <div className="navbar-brand">
              NEWSHELP
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <a className="nav-link active" aria-current="page" > */}
                    <Link className="nav-link active" aria-current="page" to="/">All</Link>
                  {/* </a> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/BusinessNews">BusinessNews</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  to="/TechnologyNews">technology</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  to="/SportsNews">Sports</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  to="/HealthNews">health</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
