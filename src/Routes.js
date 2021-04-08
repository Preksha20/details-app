import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Create from "./create";
import Home from "./Home";
import Update from "./update";


import history from './history';
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/" exact component={Home} />
                    <Route path="/create" component={Create} />
                    <Route path="/update" component={Update} />
                </Switch>
            </Router>
        )
    }
}