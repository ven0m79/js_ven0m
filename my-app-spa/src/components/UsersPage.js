import { Component } from "react";
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
                    </div>
                
                ))
             }
            </div>
        )
    }
}