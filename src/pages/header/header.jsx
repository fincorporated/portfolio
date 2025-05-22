import NavBar from "./navBar";
import './header.css'

export default function Header() {
    return (
        <>
            <div className="header">
                <img src="./src/fin.png"></img>
            </div>
            <div className="header">
                <h2 >Finley McArdle | </h2>
                <h2>Aspiring Software Developer</h2>
            </div>
            <NavBar />
        </>
    )
}