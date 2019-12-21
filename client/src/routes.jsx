import React from "react"
import { Switch, Route } from "react-router-dom"
import EditorView from "./components/EditorView";

const Routes = () => (
    <Switch>
        <Route to="/create" component={EditorView} />
        {/* <Route to="/newsletters" component={} /> */}
    </Switch>
)
export default Routes