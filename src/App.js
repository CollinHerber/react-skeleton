import React, { Component } from 'react';
import Home from './pages/home/home'
import AnotherPage from "./pages/another-page/another-page";
import './App.scss';
import {Route, NavLink, HashRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <h1>Some Shnazzy Site</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/another-page">Another Page</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/another-page" component={AnotherPage}/>
                </div>
            </HashRouter>
        );
    }
}

export default App;
