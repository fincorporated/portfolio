import NavBar from "./navBar";
import './header.css'

export default function AltHeader() {
    return (
        <div className="headercontainer">
            <div className="titleCard">
                <h2 className="altheader">Finley McArdle | </h2>
                <h2 className="altheader">Aspiring Software Developer</h2>
            </div>
            <div className="navBar">
                <NavBar />
            </div>
        </div>
    )
}