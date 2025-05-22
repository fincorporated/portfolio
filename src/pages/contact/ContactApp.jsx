import Header from "../header/header";
import AltHeader from "../header/altheader";
import './ContactApp.css';


export default function Contact() {
    return (
        <>
            <div id="contactHeaderContainer">
                <AltHeader />
            </div>
            
            <div className="card" id="contactContainer">
                <h2>Contact</h2>
                <a href="mailto:finmcardle@gmail.com" >Email Me</a>
                <p>(Contact form coming soon)</p>
            </div>
            
        </>
    )
}