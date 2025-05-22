import {pages} from '/Users/finleymcardle/devprojects/react/portfolio/src/data.js';
import './navBar.css';

export default function NavBar() {
    const items = pages.map(page => 
        <li key={page.id} className='navBar'> <a href={page.link}>{page.title}</a></li>
    )
    return <ul className='navBar'> {items} </ul>
}