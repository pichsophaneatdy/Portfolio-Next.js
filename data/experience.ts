interface Experience {
    date: string,
    title: string,
    company: string,
    skills: string[],
    role: string
}
const experience: Experience[] = [
    {
        date: "Aug 2022 - Present",
        title: "Student IT Assistant",
        company: "Fairleigh Dickinson University",
        skills:["Networking", "Software & hardware Troubleshooting", "Server Infrastructure"],
        role: "As an IT professional, I provided technical support to 1000+ students and staff, and five departments by resolving network, server, software, and hardware issues."
    },
    {
        date: "Feb 2022 - Present",
        title: "Student Ambassador",
        company: "Fairleigh Dickinson University",
        skills: ["Social Media Marketing", "Event Planning", "Adobe Premiere Pro", "Graphic Design"],
        role: "Promoted the university's program, events, and opportunities to prospective students and provide support to the Recruitment & Marketing team in the area of social media marketing, video production, event planning, and campus tours."
    },
    {
        date: "Sep 2021 - Present",
        title: "Student Receptionist",
        company: "Fairleigh Dickinson University",
        skills: ["Customer Service", "Microsoft Excel", "File Management"],
        role: "As a student receptionist, I provide friendly and efficient customer service to students, staff, and visitors, assisting with inquiries, and maintaining a welcoming and organized front desk environment."
    }
];

export const getAllExperience = (): Experience[] => {
    return experience;
}


