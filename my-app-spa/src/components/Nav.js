import { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
    render () {
        return (
            <div>
                <ul className="nav">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Users">Users</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Nav;