import React, { Component } from 'react';
import Home from './pages/home/home'
import AnotherPage from "./pages/another-page/another-page";
import './App.scss';
import {Route, NavLink, HashRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-brand">
                        <NavLink to="/">My Shnazzy Site</NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <div className="nav-link">
                                    <NavLink to="/another-page">Another Page</NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <h1>Some Shnazzy Site</h1>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/another-page" component={AnotherPage}/>
                </div>
            </HashRouter>
        );
    }
}

export default App;
