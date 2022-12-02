import { Component } from "react";
import { Link } from "react-router-dom";
import { users } from "../service";

export default class UsersPage extends Component {
    render () {
        return (
            <div>
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