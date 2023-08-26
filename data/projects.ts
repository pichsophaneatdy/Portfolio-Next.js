interface Project {
    id: number,
    date: string,
    type: string, 
    name: string
    image: string,
    technology: string[]
    desc: string,
    link: string,
    isFeatured: boolean,
    // Only required for featured projects
    detail?: string,
    skills?: string[],
}
const projects: Project[] = [
    {
        id: 1,
        date: "JULY 2023",
        name: "LeetLog",
        type: "Personal Project",
        technology: ["GraphQL", "Firebase","TypeScript"],
        link: "https://github.com/pichsophaneatdy/Leetlog-Server",
        image: "https://i.imgur.com/FmqJXBv.png",
        desc: "A tracking system for solving leetcode questions",
        isFeatured: true,
        skills: ["TypeScript", "React","Apollo Client", "Node.js", "GraphQL", "MongoDB", "Mongoose", "Apollo Server", "Firebase"],
        detail: "LeetLog is a full-stack web application that helps users keep track of their progress in solving LeetCode questions. Additionally, LeetLog provides a distribution map that visualizes the user's progress over time, making it easier to track improvements in problem-solving skills."
    },
    {
        id: 2,
        date: "JULY 2023",
        name: "Personal Website",
        type: "Personal Project",
        technology: ["React", "Framer Motion", "JavaScript"],
        link: "https://github.com/pichsophaneatdy/portfolio",
        image: "https://i.imgur.com/X4pbIb8.png",
        desc: "Personal website featuring projects, experience and about.",
        isFeatured:false
    },
    {
        id: 3,
        date: "JUN 2023",
        name: "BrainBox",
        type: "Personal Project",
        technology: ["React", "JWT","Cloudinary"],
        link: "https://github.com/pichsophaneatdy/brainbox-front-end",
        image: "https://i.imgur.com/UETWD22.jpg",
        desc: "A LinkedIn for university students",
        isFeatured: true,
        skills: ["JavaScript", "React", "SASS", "Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary", "JWT"],
        detail: "BrainBox is a student-focused platform resembling LinkedIn, designed to connect students based on their university, degree, and courses. BrainBox offers news feed, course analysis, and a marketplace. It enhances networking and collaboration between students."
    },
    {
        id: 3,
        date: "JUN 2023",
        name: "Apex Mentor Connect",
        type: "Hackathon Project",
        technology: ["Sass","JavaScript", "React"],
        link: "https://github.com/pichsophaneatdy/Apex_Legends_Mentor_Connect",
        image: "https://i.imgur.com/MLNnhB7.jpg",
        desc: "A platform for connecting mentors and mentees in Apex Legends",
        isFeatured:false
    },
    {
        id: 4,
        date: "JUN 2023",
        name: "Instock",
        type: "Team Project",
        technology: ["MySQL", "knex.js", "React"],
        link: "https://github.com/TristanPernot/instock",
        image: "https://i.imgur.com/7B7HSP6.jpg",
        desc: "An inventory management system",
        isFeatured:false
    },
    {
        id: 5,
        date: "MAY 2023",
        name: "Explore+City.",
        type: "Personal Project",
        technology: ["Node.js", "Express.js","MongoDB"],
        link: "https://github.com/pichsophaneatdy/Explore_City_FrontEnd",
        image: "https://i.imgur.com/I7A80kR.jpg",
        desc: "A platform for researching cities all around the world",
        isFeatured: true,
        skills: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Mongoose"],
        detail: "Explore+City. is a full-stack application that revolutionizes city exploration. With just a few clicks, users can search for a city, uncovering valuable information about cost of living, weather, air quality, tourist attractions and more."
    },
    {
        id: 6,
        date: "MAY 2023",
        name: "Tasty Eats",
        type: "Hackathon Project",
        technology: ["React", "Node.js","Express.js"],
        link: "https://github.com/pichsophaneatdy/Tasty-Eats/tree/main",
        image: "https://i.imgur.com/2KcpcFq.jpg",
        desc: "Recipe generator and Meal Planner",
        isFeatured:false
    },
    {
        id: 7,
        date: "MAY 2023",
        name: "Brainflix",
        type: "Bootcamp Project",
        technology: ["React", "Node.js","Express.js"],
        link: "https://github.com/pichsophaneatdy/pichsophaneat-dy-brainflix",
        image: "https://i.imgur.com/ORYIJYm.jpg",
        desc: "A simple streaming video web app",
        isFeatured:false
    },
    {
        id: 8,
        date: "MAY 2023",
        name: "Ai Image Generator",
        type: "Personal Project",
        technology: ["JavaScript","DALL-E", "Cloudinary"],
        link: "https://github.com/pichsophaneatdy/AI-Image-Generator",
        image: "https://i.imgur.com/pKf9i1i.png",
        desc: "Generate an image based on a prompt",
        isFeatured:true,
        skills: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
        detail: "AI Image Generator is a MERN stack application that utilizes artificial intelligent(DALL-E) to generate image based on user prompts. Also, users can share the generated image on the community page, and other users can later download those images."
    },
    {
        id: 9,
        date: "MAY 2023",
        name: "Weather App",
        type: "Hackathon",
        technology: ["HTML", "SASS","JavaScript"],
        link: "https://github.com/pichsophaneatdy/Weather-App",
        image: "https://i.imgur.com/3prEBii.jpg", 
        desc: "A weather app",
        isFeatured:false
    },
    {
        id: 10,
        date: "APR 2023",
        name: "Bill Spliter",
        type: "Personal Project",
        technology: ["JavaScript","React","BootStrap"],
        link: "https://github.com/pichsophaneatdy/Bill-Splitter-App",
        image: "https://i.imgur.com/1d3mn1D.jpg", 
        desc: "A calculator that simplifies bill splitting",
        isFeatured:false
    },
    {
        id: 11,
        date: "APR 2023",
        name: "Bandsite",
        type: "Bootcamp Project",
        technology: ["HTML", "SASS", "JavaScript"],
        link: "https://github.com/pichsophaneatdy/bandsite",
        image: "https://i.imgur.com/HJgz6Ud.jpg", 
        desc: "A website for a new band",
        isFeatured:false
    },
    {
        id: 12,
        date: "APR 2023",
        name: "Where In the World",
        type: "Personal Project",
        technology: ["JavaScript","React","BootStrap"],
        link: "https://github.com/pichsophaneatdy/Where-in-the-World",
        image: "https://i.imgur.com/S4SnreM.jpg", 
        desc: "A platform for researching countries",
        isFeatured:false
    },
    {
        id: 13,
        date: "MAR 2023",
        name: "Facebook Landing Page Clone",
        type: "Personal Project",
        technology: ["HTML", "CSS","JavaScript"],
        link: "https://github.com/pichsophaneatdy/Facebook-Landing-Page-Clone",
        image: "https://i.imgur.com/OG1LdSy.jpg", 
        desc: "A clone of Facebook landing page",
        isFeatured:false
    },
    {
        id: 14,
        date: "MAR 2023",
        name: "Netflix Landing Page Clone",
        type: "Personal Project",
        technology: ["HTML", "CSS","JavaScript"],
        link: "https://github.com/pichsophaneatdy/Netflix-Landing-Page",
        image: "https://i.imgur.com/QBrRL2k.jpg",
        desc: "A clone of Netflix landing page",
        isFeatured:false
    }
]
export const getAllProjects = () => {
    return projects;
}
export const getFeaturedProjects = () => {
    return projects.filter((project) => project.isFeatured);
}
export default projects;