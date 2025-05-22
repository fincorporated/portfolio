import { useState } from "react";
import Header from "../header/header";
import AltHeader from "../header/altheader";
import './AboutApp.css';
import Resume from "./resume";
import Skills from "./skills";
import { TechnicalSkills } from "./skills";
import Summary from "./summary";


export default function AboutApp() {
    return (
        <>
            <div>
                <div className="altheader">
                    <AltHeader />
                </div>
                <div className="aboutAppContainer">  
                    <h2 className="title">About Me</h2>
                    <div className="card" id="summary">
                        <Summary />
                    </div>
                    <div className="card" id="experience">
                        <h3>Experience</h3>
                        <Resume />
                    </div>
                    <div className="card" id="technicalSkills">
                        <TechnicalSkills />
                    </div>
                    <div className="card" id="skills">
                        <Skills />
                    </div>
                    <div className="card" id="education">
                        <h3>Education</h3>
                        <p>Fordham University | Bachelor of Arts</p>
                    </div>
                </div>  
            </div>
        </>
    )
}