import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <>
        <div className="m-4">
            <div className="d-flex justify-content-center align-items-center home-bg text-white">
                <div className="text-center m-2">
                <h3 className="bg-black mb-5">
                EXPLORE OUR ECO AND TOUR-TOGETHER TRAVEL ITINERARIES</h3>
                <h1 className=" d-inline heading text-center mx-auto">
                THE WORLD IS YOURS</h1>
                <br />
                <NavLink to='/blogs'>
                    <Button className="btn btn-outline-dark btn-warning mt-5">See Blogs</Button>
                </NavLink>
                </div>
            </div>
        <Services/>
        </div>
        </>
    );
};

export default Home;