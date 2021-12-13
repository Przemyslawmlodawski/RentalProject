import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
export default class createUser extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            lastname: '',
            address: '',
            phone: 0,
            date: new Date()
        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeLastName(e) {
        this.setState({
            lastname: e.target.value
        })
    }
    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }
    onChangeDate(date) {
        this.setState({
            date: date
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const user = {
            name: this.state.name,
            lastname: this.state.lastname,
            address: this.state.address,
            phone: this.state.phone,
            date: this.state.date
        }

        axios.post('http://localhost:1337/users/add', user)
            .then(res => console.log(res.data))
            .catch((error) => {
                console.log(error)
            })


    }
    render() {
        return (
            <div>
                <h3>Stwórz użytkownika</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Lastname: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.lastname}
                            onChange={this.onChangeLastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.address}
                            onChange={this.onChangeAddress}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input type="number"
                            required
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.onChangePhone}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
