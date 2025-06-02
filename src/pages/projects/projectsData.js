export const projectsData = [{
    index: 0,
    title: 'License Plate Tracker',
    image: '',
    color: '#177e89',
    link: 'https://fincorporated.github.io/licensePlates/',
    description: "Growing up in my family, the second best game to play in the car (after the alphabet game) was the license plate game. If you aren’t familiar, the license plate game tasks players with the goal of spotting license plates from each of the 50 states (and in this case the 10 Canadian provinces) while on your journey. When I told my mom I was learning to code, this simple license plate tracker was her first demand request. It lets her avoid the ad-filled app versions and with local storage, she can keep the game going until she wants to reset it.",
    futureDevelopments: ['Support for tracking multiple concurrent games (e.g., lifetime vs. individual trips)', 'Improved user interface and styling', 'Full rebuild as an iOS mobile app'],
},  {
    index: 1,
    title: 'Short or Long Sleeves?',
    image: '/sleeves.png',
    color: '#db3a34',
    link: 'https://fincorporated.github.io/doINeedAJacket/',
    description: "In my house, this is an almost daily, often twice-a-day question, and one that we rarely answer adequately. This project is my work in progress solution to our what-to-where-weather-woes. Currently it can accept manually entered weather data (temperature and conditions) or a manually entered location (city and state) which it uses to fetch weather data through Open Meteo’s API, and based on that data, along with your personal temperature leanings it generates an answer to the question, short or long sleeves?",
    futureDevelopments: ['Geolocation in the browser', 'Custom API for integrating with Home Assistant (GET answer and/or POST weather)', 'Memory functionality through backend database, allowing users to save favorite locations and give feedback on outfit suggestions that will influence future suggestions, ie. if a user gives positive feedback on a recommendation made for a day that is 60°, sunny, with 5mph wind, then the next day with matching weather conditions will provide the same outfit recommendation.', 'More detailed outfit recommendations beyond outerwear, including the ability to save outfit preferences (such as sweaters vs. sweatshirts, types of jackets to recommend, etc.) and to exclude certain clothing items from recommendations.'],
}, {
    index: 2,
    title: 'Springboard to Design Website',
    image: '',
    color: '#7fb069',
    link: 'https://fincorporated.github.io/springboard/',
    description: "This informational site supports Springboard to Design, a summer arts program introducing high school students to theatrical design. I collaborated directly with the program manager to build a custom website using HTML, CSS, and JavaScript that fulfills key needs: sharing program details and resources, encouraging donations, and providing a way for visitors to contact the team.",
    futureDevelopments: ['Rebuild with React for improved UX','Custom application form with support for text responses and media uploads', 'Integrated payment system for collecting donations', 'Enhanced contact form with categorized inquiry options (e.g., student, educator, donor)', 'Continued UI improvements with input from artistic team'],
}, {
    index: 3,
    title: 'Personal Portfolio Website',
    image: '',
    color: '#f3a712',
    link: '',
    description: 'This multi-page site, built with React and Vite, showcases my web development projects, skills, and experience. Designed for performance and ease of navigation, it highlights both technical and creative work while reflecting my personal style. The site is fully responsive and serves as a central hub for recruiters, collaborators, and anyone interested in my development journey.',
    futureDevelopments: ['Dark mode toggle for improved accessibility and user preference', 'CMS integration (e.g. Sanity or Contentful) for easier project updates', 'Animated project transitions and scroll-based effects for a more dynamic user experience', 'Contact form with validation and backend integration for direct inquiries']
}

]

// // {
//     index: 3,
//     title: 'Delaney Garden and Design',
//     link: '',
//     description: "An up-and-coming landscaping and floral design company. This team is still developing their business and building a customer base, so for now their website serves as a placeholder that can be linked on their instagram and provide basic contact information. In the future photos of their work will be the bulk of the content, along with a more robust inquiry form.",
// }, {
//     index: 4,
//     title: 'Customizable Habit Tracker',
//     link: '',
//     description: "Another request from my mother (what can I say? The woman raised me, I feel I owe her a couple basic websites). Though there are no shortage of habit tracking apps on the market, the most easily discovered are too busy with additional features for her, or they fail to provide the level of customization she needs to track her physical therapy exercises. The purpose of this tracker is to give users full control over the target frequency of a habit as well as additional trackable-variables. For example, my mom is looking to track reps of her exercises, which may be useful for many exercises, but if one wishes to track duration of their walks, or intensity of their workout on a scale of 1-10, or the title of the book they read, a custom variable allows them to do that.",
// }