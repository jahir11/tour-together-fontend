import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center my-5">
            <h1>404 page not found</h1>
            <NavLink to="/home"><button className="btn btn-success mt-3">Back to Home</button></NavLink>
        </div>
    );
};

export default NotFound;