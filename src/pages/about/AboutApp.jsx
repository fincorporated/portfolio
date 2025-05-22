import { useState } from "react";
import Header from "../header/header";
import AltHeader from "../header/altheader";
import './AboutApp.css';
import Resume from "./resume";
import Skills from "./skills";
import { TechnicalSkills } from "./skills";


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
                        <h3>Professional Summary</h3>
                        <p>Resourceful and fast-learning professional transitioning into the tech industry with two years of experience in SaaS sales, CRM management (Salesforce), and data analysis. Strong communicator with a background in education and a growing technical skill set including HTML, CSS, JavaScript, and Tableau. Skilled at explaining complex ideas, troubleshooting issues, and working cross-functionally in dynamic environments.</p>
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