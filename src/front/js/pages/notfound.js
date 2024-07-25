import React from "react";
import { Link } from "react-router-dom";


export const NotFound = () => {
    return (
        <div className="container-fluid p-0 mb-1">
            <h2>Page Not Found</h2>
            <Link className="btn btn-secondary" to="/">Back to Home</Link>
        </div>
    );
};
