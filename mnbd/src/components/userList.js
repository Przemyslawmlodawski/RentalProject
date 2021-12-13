import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const User = props => (<tr>
    <td>{props.user.name}</td>
    <td>{props.user.lastname}</td>
    <td>{props.user.address}</td>
    <td>{props.user.phone}</td>
    <td>{props.user.date.substring(0, 10)}</td>

    <td><Link to={'/editUser/' + props.user._id}>edit</Link>|<a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a></td>
</tr>)
export default class UserList extends Component {
    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this);

        this.state = { users: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:1337/users/')
            .then(response => {
                this.setState({ users: response.data })
            })
            .catch(err => { console.log(err) })
    }
    deleteUser(id) {
        axios.delete('http://localhost:1337/users/' + id)
            .then(resposne => console.log(resposne))
        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })

    }
    userList() {
        return this.state.users.map(currentUser => {
            return <User user={currentUser} deleteUser={this.deleteUser} key={currentUser._id} />
        })
    }
    render() {
        return (
            <div>
                <h3>User List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Register Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
