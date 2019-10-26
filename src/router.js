import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Homepage from "./views/homepage"

export default function AppRoute(){
    return (
        <Router>
            <Route exact path="/" components={Homepage}/>
        </Router>
    )
}