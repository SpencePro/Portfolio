import React from "react";
import { CS50 } from "./CS50";
import { Biography, Intro } from "./intro_and_biography";
import { Sidebar } from "./sidebar";
import { Projects, Skills } from "./technologies_and_projects";

export const MainPage = () => {
    return (
        <>
        <div className="main-page-container">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="main-page-content">
                <div className="intro">
                    <Intro/>
                </div>
                <div className="skills">
                    <Skills/>
                </div>
                <div className="projects">
                    <Projects/>
                </div>
                <div className="cs50">
                    <CS50/>
                </div>
                <div className="biography">
                    <Biography/>
                </div>
            </div>
        </div>
        </>
    )
}