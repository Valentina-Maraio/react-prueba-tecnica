import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from '../pages/Inicio';
import Series from '../pages/Series';
import Movies from '../pages/Movies';
import Login from '../pages/Login';
import FreeTrial from '../pages/FreeTrial'
import Menu from './Menu';

const Home = () => {
    return (
        <div>
            <Menu />
            <Router>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/series" element={<Series />}></Route>
                    <Route path="/movies" element={<Movies />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/freetrial" element={<FreeTrial />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Home