import { useState } from "react";
import Header from "../header/header";
import './AboutApp.css';


export default function AboutApp() {
    return (
        <>
            <Header />
            <h2>About Me</h2>
            <div id="summary">
                <h3>Professional Summary</h3>
                <p>Resourceful and fast-learning professional transitioning into the tech industry with two years of experience in SaaS sales, CRM management (Salesforce), and data analysis. Strong communicator with a background in education and a growing technical skill set including HTML, CSS, JavaScript, and Tableau. Skilled at explaining complex ideas, troubleshooting issues, and working cross-functionally in dynamic environments.</p>
            </div>
            <div id="experience">
                <h3>Experience</h3>
            </div>
        </>
    )
}