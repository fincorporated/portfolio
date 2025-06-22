import { entries } from './blogData.js';


export default function BlogEntries() { 
    const writtenEntries = entries.filter(entry => 
        entry.content !== ''
    );

    const blogEntries = writtenEntries.map(entry => 
        <div className="blogEntryContainer">  
            <h3>Blog Entry #{entry.id+1} </h3>
            <h4>{entry.date}</h4>
            {entry.content.map(paragraph =>
                <p>{paragraph}</p>
            )}
            <br /> <p>Until next time, <br /> Fincorporated</p>            
        </div>
    )
    return (
        <>
            {blogEntries}
        </>
    ) 
}
