import React from 'react';
import notFound from "../../assets/notFound.jpg";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center py-20">
            <div className="awr">
                <div className="flex justify-center">
                    <img src={notFound} alt="" />
                </div>
                <h2>Oops... the page you are looking for doesn't exist.</h2>
                <Link className="text-green-400" to="/">
                    Click here
                </Link>{" "}
                to return to the homepage
            </div>
        </div>
    );
};

export default NotFound;