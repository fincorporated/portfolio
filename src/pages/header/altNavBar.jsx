import {pages} from '/src/data.js';
import './navBar.css';

export default function AltNavBar() {
    const items = pages.map(page => 
        <p key={page.id} className='altNavBar'> <a href={page.link}>{page.title}</a></p>
    )
    return (
    <div className='altNavBarContainer'>
        {items}
    </div>
    )
}