import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import FilmList from './components/filmList'
import EditFilm from './components/editFilm'
import AddFilm from './components/addFilm'
import CreateUser from './components/createUser';
import UserList from './components/userList'
function App() {
    return (
        <div className="App">
            <Router>
                <div className="container">
                    <Navbar />
                    <br />
                    <Routes>
                        <Route path='/' element={<FilmList />} />
                        <Route path="/edit/:id" element={<EditFilm />} />
                        <Route path="/create" element={<AddFilm />} />
                        <Route path="/user" element={<CreateUser />} />
                        <Route path="/userList" element={<UserList />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
