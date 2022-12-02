import { Component } from "react";
import { users } from "../service";
import Header from "./Header";

export default class UserPage extends Component {
    render () {
        const index = this.props.match.params.id;
        const user = users[index]
        return (
            <div>
                <Header/>
                <div className="user">
                        <strong>{user.name}</strong>
                        <p>Comments: {user.comments}</p>
                    </div>
            </div>
        )
    }
}