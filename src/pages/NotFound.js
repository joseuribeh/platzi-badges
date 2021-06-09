import React from 'react';
import { Link } from 'react-router-dom';

import Error from '../images/404-error.svg';
import './styles/NotFound.css'

function NotFound() {
    return (
        <div className="NotFound">
            <img src={Error} alt="Error 404" className="img-fluid NotFound__img" />
            <h1>Page not found</h1>
            <Link to="/" className="btn btn-primary"> Get back </Link>
        </div>
    )
}

export default NotFound