import React from 'react';
import { FaArrowsAltH, FaGoogle } from "react-icons/fa";
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { handleGoogleSignIn } = useFirebase()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const handleGoogleLogIn =() => {
        handleGoogleSignIn()
        .then( result => {
            history.push(redirect_uri)
        })
    }
    return (
        <div className=" container text-center my-5"> 
            <h1>Please Login with Google</h1>
            <hr />
            <br />

            <button onClick={ handleGoogleLogIn } className="btn-google px-5 my-3 py-1"><FaArrowsAltH/> <FaGoogle/>  <FaArrowsAltH/> </button>
            <br />
            <hr />

        </div>
    );
};

export default Login;