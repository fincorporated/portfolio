import { projectsData } from './projectsData.js';
import AltHeader from '../header/altheader.jsx';
import './projects.css'
import Gallery from './gallery.jsx';

export default function ProjectsApp() {
    return (
        <div className='projectsContainer'>
            <AltHeader />
            <div className='galleryContainer'>
                <Gallery /> 
            </div>
            
        </div>
    );
}