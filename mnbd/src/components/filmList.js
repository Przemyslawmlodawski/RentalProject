import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Film = props => (<tr>
    <td>{props.film.title}</td>
    <td>{props.film.type}</td>
    <td>{props.film.director}</td>
    <td>{props.film.length}</td>
    <td>{props.film.rate}</td>
    <td>{props.film.description}</td>
    <td>{props.film.actors}</td>
    <td>{props.film.date.substring(0, 10)}</td>
    <td><Link to={'/edit/' + props.film._id}>edit</Link>|<a href="#" onClick={() => { props.deleteFilm(props.film._id) }}>delete</a></td>
</tr>)
export default class FilmList extends Component {
    constructor(props) {
        super(props);

        this.deleteFilm = this.deleteFilm.bind(this);

        this.state = { films: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:1337/films/')
            .then(response => {
                this.setState({ films: response.data })
            })
            .catch(err => { console.log(err) })
    }
    deleteFilm(id) {
        axios.delete('http://localhost:1337/films/' + id)
            .then(resposne => console.log(resposne))
        this.setState({
            films: this.state.films.filter(el => el._id !== id)
        })
    }
    filmList() {
        return this.state.films.map(currentfilm => {
            return <Film film={currentfilm} deleteFilm={this.deleteFilm} key={currentfilm._id} />
        })
    }
    render() {
        return (
            <div>
                <h3>Film List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Direcotr</th>
                            <th>Lenght(min)</th>
                            <th>Rate</th>
                            <th>Description</th>
                            <th>Actors</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.filmList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
