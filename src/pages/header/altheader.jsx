import NavBar from "./navBar";
import './header.css'
import Logo from "../../logo";
import AltNavBar from "./altNavBar";

export default function AltHeader() {
    return (
        <>
            <div className="altheaderContainer">
                <div className="brand">
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className="titleCard">
                        <h2 className="altheader">Finley McArdle | </h2>
                        <h2 className="altheader">Aspiring Software Developer</h2>
                    </div>
                </div>
                
                <AltNavBar />
            </div>
            
        </>
    )
}