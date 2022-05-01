import React from "react";
import './logo.css';
import {Link} from "react-router-dom";


function Logo() {
    return (
        <div className="conteinet__logo">
            <div className="block__line-left"></div>
            <div className="logo__text">
                <h1><Link to={""}>Техник+</Link></h1>
            </div>
            <div className="block__line-right"></div>
        </div>
    );
}


export default Logo;
