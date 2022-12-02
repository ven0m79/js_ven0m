import { Component } from "react";
import { Link } from "react-router-dom";
import { users } from "../service";
import Header from "./Header";

export default class UsersPage extends Component {
    render () {
        const baseUrl = this.props.location.pathname;
        return (
            <div>
                <Header url = {baseUrl}/>
             {
                users.map((user, index) => (
                    <div key={user.id} className="user">
                        <strong>{user.name}</strong>
                        <p>Comments: {user.comments}</p>
                        <Link to={`/users/${index}`}>to user</Link>
                    </div>
                
                ))
             }
            </div>
        )
    }
}