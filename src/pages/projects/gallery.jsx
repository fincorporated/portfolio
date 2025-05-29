import { projectsData } from "./projectsData";
import { useState } from "react";

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        const total = projectsData.length - 1;
        if(index === total) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    let project = projectsData[index]
    return (     
    <div className="card" id="gallery" style={{
        boxShadow: `2em 2em ${project.color}`
    }} >
       <h3><a href={project.link} target="blank">{project.title}</a></h3> 
        <p>{project.description}</p>
        <h4>Planned Enhancements:</h4>
        <ul>
            {project.futureDevelopments.map(development =>
                <li>{development}</li>
            )}
        </ul>
        <button onClick={handleClick}>Next</button>
    </div>
    )
}