import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker'
export default class AddFilm extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDirector = this.onChangeDirector.bind(this);
        this.onChangeRate = this.onChangeRate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLenght = this.onChangeLenght.bind(this);
        this.onChangeActors = this.onChangeActors.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            title: "",
            type: "",
            director: "",
            length: 0,
            rate: 1,
            description: "",
            actors: "",
            date: new Date(),
            users: [],
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test user']
        })
    }
    onChangeDate(date) {
        this.setState({
            date: date
        })
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    onChangeType(e) {
        this.setState({
            type: e.target.value
        })
    }
    onChangeDirector(e) {
        this.setState({
            director: e.target.value
        })
    }
    onChangeLenght(e) {
        this.setState({
            length: e.target.value
        })
    }
    onChangeRate(e) {
        this.setState({
            rate: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    onChangeActors(e) {
        this.setState({
            actors: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const film = {
            title: this.state.title,
            type: this.state.type,
            director: this.state.director,
            length: this.state.length,
            rate: this.state.rate,
            description: this.state.description,
            actors: this.state.actors,
            date: this.state.date
        }
        console.log(film)
        axios.post('http://localhost:1337/films/add', film)
            .then(res => console.log(res.data))
            .catch((error) => {
                console.log(error)
            })

        window.location = '/';
    }
    render() {
        return (
            <div>
                <h3>Dodaj Film!</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Type: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeType}
                        />
                    </div>
                    <div className="form-group">
                        <label>Director: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.director}
                            onChange={this.onChangeDirector}
                        />
                    </div>
                    <div className="form-group">
                        <label>Lenght: </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.length}
                            onChange={this.onChangeLenght}
                        />
                    </div>
                    <div className="form-group">
                        <label>Rate: </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.rate}
                            onChange={this.onChangeRate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Actors: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.actors}
                            onChange={this.onChangeActors}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Dodaj Film" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
