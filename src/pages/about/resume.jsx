const resumeItems = [{
    index: 0,
    company: 'On The Stage',
    position: 'Sales Development Representative',
    time: 'April 2023 - Present',
    descriptors: [
        'Created and analyzed Salesforce reports to track outreach performance and guide sales strategy.',
        'Supported data accuracy by identifying duplicate records and managing lead flow.',
        'Delivered tailored outreach to potential clients and gathered technical use case data to inform demos.',
    ],
}, {
    index: 1,
    company: 'Success Academy',
    position: 'Teacher',
    time: 'January 2022 - September 2022',
    descriptors: [
        'Designed and executed data-informed lesson plans based on student performance and engagement trends.',
        'Delivered instruction with empathy and responsiveness across diverse learning needs.',
        'Collected qualitative and quantitative data to evaluate teaching effectiveness and improve outcomes.'
    ],
},

]

export default function Resume() {
    const listItems = resumeItems.map(resumeItem => 
        <div>
            <h4> {resumeItem.company} </h4> 
            <h5>{resumeItem.position} | </h5>
            <h5>{resumeItem.time} </h5>
            <ul className="resume">
                <li>
                    {resumeItem.descriptors[0]}
                </li>
                <li>
                    {resumeItem.descriptors[1]}
                </li>
                <li>
                    {resumeItem.descriptors[2]}
                </li>
            </ul>
        </div>
    );

    return (
        <>
            {listItems}
        </>
    )
}