import { useState } from "react";
import { entries } from './blogData.js';

export default function BlogEntries() { 
    return entries.map(GetBlogEntry);

}

function GetBlogEntry(entry) {
    let hasContent = entry.content !== '';
    let blogEntry;
    let blogEntryRelativeDate;
    let blogEntryDate;
    let blogClass;
    let shadowColor;

    const colors = ['#db3a34', '#177e89', '#f3a712', '#7fb069']
    if (hasContent) {
        blogEntry = entry.content;
        blogEntryRelativeDate = entry.relativeDate;
        blogEntryDate = entry.date;
        blogClass = 'blogEntryContainer'
        shadowColor = colors[entry.id % colors.length]
    } else {
        blogEntry = '';
        blogClass = 'empty';
        shadowColor = '';
    }

    return (
        <div className={blogClass} style={{
            boxShadow: `1em 1em ${shadowColor}`
        }} >
            <div className="blogTitle">
               <h3>
                {blogEntryDate} {blogEntryRelativeDate}
               </h3>
            </div>
            <div className="blogContent">
                {blogEntry}
            </div>
        </div>
        
    )


    // return (
    //     <div className="title">
    //         <h3>{entry.date}, {entry.relativeDate}</h3>
    //         <h4>Fincorporated's Self-Teaching Blog Entry #{entry.index}</h4>
    //     </div>
    // )
}