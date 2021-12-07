import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
        <header>
            <h1><Link to="/">Spencer Rodgers</Link></h1>
            <ul>
                <li><a href="https://github.com/SpencePro" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/spencer-rodgers-b3322997/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="mailto: spencer.a.rodgers@gmail.com" target="_blank" rel="noreferrer">Email</a></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
        </header>
        </>
    )
}


export const Footer = () => {
    return (
        <>
        <footer>
            <ul>
                <li><a href="https://github.com/SpencePro" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/spencer-rodgers-b3322997/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="mailto: spencer.a.rodgers@gmail.com" target="_blank" rel="noreferrer">Email</a></li>
            </ul>
        </footer>
        </>
    )
}