import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Detail from "./screens/Detail";

const App = () => {
    return (
    <BrowserRouter>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
        <Switch>
            <Route path="/detail/:id">
                <Detail />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
    )
};

export default App;