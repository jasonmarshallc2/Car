import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Customers from './Customers';
import Jobs from './Jobs';
import Scan from './Scan';

export const API = '/api';

export default class MomsBuickApp extends Component {

  render() {
    return (
      <HashRouter>
        <main>
          <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <Link to="/" className="navbar-brand">Mopeds</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to="/customers" className="nav-link">Customers</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/jobs" className="nav-link">Jobs</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/scan" className="nav-link">Scan</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <div id="content">
            <Route path="/customers" component={Customers} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/scan" component={Scan} />
          </div>
          <footer>
            <p><a href="/public/index.htm">Original Test Page</a></p>
          </footer>
        </main>
      </HashRouter>
    );
  }

}
