import React, {Component} from "react";
import Form from "./Form";
import UsersList from "./UsersList";


class Users extends Component {
    // state = {
    //     allUsers: []
    // }

    // getAllUsers = data => {
    //     this.setState({allUsers: [...this.state.allUsers, data]})
    // }

    render() {
        return (
            <div>
                {/*<Form getUser = {this.getAllUsers}/>*/}
                {/*<UsersList users = {this.state.allUsers}/>*/}
                <Form />
                <UsersList />
            </div>
        )
    }
}

export default Users;


// ch, pr  => store => ch, pr  Flux
