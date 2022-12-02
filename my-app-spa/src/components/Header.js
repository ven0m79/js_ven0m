import { Component } from "react";
import Nav from "./Nav";

export default class Header extends Component {
    render () {
        return (
            <div className="header">
                <h1>Logo</h1>
                <Nav />
                {
                    this.props.url === '/Users' ? <button className="btn">Add user</button> : <div></div>
                }
                
            </div>
        )
    }
}
