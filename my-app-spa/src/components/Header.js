import { Component } from "react";
import Nav from "./Nav";

export default class Header extends Component {
    render () {
        return (
            <div className="header">
                <h1>Logo</h1>
                <Nav />
                <button className="btn">Add user</button>
            </div>
        )
    }
}
