import Header from "../header/header";
import './BlogApp.css';
import BlogEntries from "./entries";
import AltHeader from "../header/altheader"

export default function Blog() {
    return (
        <>    
            <div className="blogHeaderContainer">
                <AltHeader />
            </div>
            
            <BlogEntries />
        </>
    )
}