import NavBar from "./navBar";
import './header.css'
import Logo from "../../logo";

export default function Header() {
    return (
        <>
            <div className="headerLogo">
                <Logo />
            </div>
            <div className="header">
                <h2 >Finley McArdle <span>|</span> </h2>
                <h2>Aspiring Software Developer</h2>
            </div>
            <NavBar />
        </>
    )
}