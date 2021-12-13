import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">FilmRental</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Films</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">AddFilm</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/user" className="nav-link">CreateUser</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/userList" className="nav-link">UserList</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar
