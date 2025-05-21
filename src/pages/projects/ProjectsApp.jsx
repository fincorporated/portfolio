import { projectsData } from './projectsData.js';
import Header from '../header/header.jsx';

export default function ProjectsApp() {
    const listItems = projectsData.map(project => 
        <>
            <h3>
                <a href={project.link} target='blank'>{project.title}</a> 
            </h3>
            <p>{project.description}</p>
            <h4>Future Developments</h4>
            <ul>
                <li> {project.futureDevelopments[0]} </li>
                <li> {project.futureDevelopments[1]} </li>
                <li> {project.futureDevelopments[2]} </li>
            </ul>
        </>
    );
    return (
        <>
            <Header />
            <h2>Projects</h2>
                {listItems}
        </>
    );
}