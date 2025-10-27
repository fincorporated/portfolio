import {pages} from '/src/data.js';
import './navBar.css';

export default function NavBar() {
    const items = pages.map(page => 
        <p key={page.id} className='navBar'> <a href={page.link}>{page.title}</a></p>
    )
    return (
    <div className='navBarContainer'>
        {items}
    </div>
    )
}