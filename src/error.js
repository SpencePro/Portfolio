import React from "react";
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <>
        <div className="error-message-404">
            <h1>Oops!</h1>
            <h4>It looks like this page does not exist</h4>
            <h4>Go back to the <Link to="/"><b>main page</b></Link></h4>
        </div>
        </>
    )
}