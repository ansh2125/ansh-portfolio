import {
    Database,
    Server,
    Layout,
    Code2,
    FileCode,
    Palette,
    Wind,
    GitBranch,
    Briefcase,
    GraduationCap,
    Award,
    Users,
    Stethoscope,
    Car,
    Building2,
} from 'lucide-react';
import profileImg from "../assets/portfolio-img.jpeg"
import resume from "../assets/resume.pdf"
export const personalInfo = {
    name: "Ansh Shukla",
    role: "MERN Stack Developer",
    email: "anshshukla9027@gmail.com",
    phone: "+918384019204",
    location: "India",
    github: "https://github.com/ansh2125",
    linkedin: "https://www.linkedin.com/in/ansh-shukla-647984230",
    profileImage: profileImg,
    resumeUrl: resume,
};

export const aboutData = {
    title: "About Me",
    description: [
        "I'm a passionate MERN Stack Developer with hands-on experience in building scalable web applications. Currently working at Neogencode Technologies Pvt Ltd, I specialize in creating robust full-stack solutions using MongoDB, Express.js, React.js, and Node.js.",
        "My journey in tech started during my B.Tech in Computer Science, where I discovered my love for coding and web development. Since then, I've been continuously learning and growing, working on diverse projects ranging from healthcare platforms to job portals.",
        "Beyond coding, I've actively contributed to the tech community as a Microsoft Learn Student Ambassador and led my college's coding club, HackerWorld, guiding over 100+ students in their programming journey."
    ],
    highlights: [
        { icon: Briefcase, label: "Professional Experience", value: "Currently Working" },
        { icon: GraduationCap, label: "Education", value: "B.Tech CS - 76.1%" },
        { icon: Users, label: "Students Mentored", value: "100+" },
        { icon: Award, label: "Certifications", value: "2+" },
    ]
};

export const skills = [
    { name: "MongoDB", icon: Database, color: "text-green-600", bgColor: "bg-green-50", level: 85 },
    { name: "Express.js", icon: Server, color: "text-gray-700", bgColor: "bg-gray-50", level: 88 },
    { name: "React.js", icon: Layout, color: "text-blue-500", bgColor: "bg-blue-50", level: 90 },
    { name: "Node.js", icon: Server, color: "text-green-500", bgColor: "bg-green-50", level: 87 },
    { name: "JavaScript", icon: Code2, color: "text-yellow-500", bgColor: "bg-yellow-50", level: 92 },
    { name: "HTML", icon: FileCode, color: "text-orange-500", bgColor: "bg-orange-50", level: 95 },
    { name: "CSS", icon: Palette, color: "text-blue-600", bgColor: "bg-blue-50", level: 90 },
    { name: "Tailwind CSS", icon: Wind, color: "text-cyan-500", bgColor: "bg-cyan-50", level: 88 },
    { name: "Git", icon: GitBranch, color: "text-orange-600", bgColor: "bg-orange-50", level: 85 },
];

export const experiences = [
    {
        id: 1,
        company: "Neogencode Technologies Pvt Ltd",
        role: "MERN Stack Developer",
        duration: "Present",
        status: "Currently Working",
        type: "Full-time",
        location: "India",
        description: [
            "Developing and maintaining full-stack web applications using MERN stack",
            "Collaborating with cross-functional teams to deliver high-quality software solutions",
            "Implementing responsive UI designs and RESTful APIs",
            "Participating in code reviews and following best development practices"
        ],
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]
    },
    {
        id: 2,
        company: "Chetu India Pvt Ltd",
        role: "MERN Stack Developer",
        duration: "7 Months",
        status: "Completed",
        type: "Full-time",
        location: "India",
        description: [
            "Built scalable web applications using React.js and Node.js",
            "Worked on database design and optimization with MongoDB",
            "Collaborated with senior developers on client projects",
            "Gained hands-on experience with agile development methodologies"
        ],
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"]
    }
];

export const education = [
    { degree: "B.Tech in Computer Science", score: "76.1%", institution: "University", icon: GraduationCap },
    { degree: "Class 12", institution: "Bhagirath Public School", icon: GraduationCap },
    { degree: "Class 10", institution: "Lal Bahadur Shastri Sainik School", icon: GraduationCap }
];

export const volunteerExperience = [
    {
        id: 1,
        role: "Microsoft Learn Student Ambassador",
        organization: "Microsoft",
        duration: "September 2023 – September 2024",
        icon: Award,
        color: "from-blue-500 to-cyan-500",
        activities: [
            "Organized cloud and tech learning activities for students",
            "Helped students improve their technical skills through workshops",
            "Promoted Microsoft learning resources and certifications",
            "Conducted sessions on Azure and Microsoft technologies"
        ]
    },
    {
        id: 2,
        role: "Coding Club President",
        organization: "HackerWorld - College Coding Club",
        duration: "June 2023 – April 2024",
        icon: Users,
        color: "from-purple-500 to-pink-500",
        activities: [
            "Led the college coding club with 100+ active members",
            "Guided students in programming and web development",
            "Conducted sessions on web technologies and best practices",
            "Organized coding competitions and hackathons"
        ]
    }
];

export const certifications = [
    {
        id: 1,
        name: "MERN Stack Development Certification",
        issuer: "Udemy",
        icon: Award,
        color: "from-purple-500 to-indigo-500",
        description: "Comprehensive certification covering MongoDB, Express.js, React.js, and Node.js development",
        skills: ["MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
        id: 2,
        name: "UI Developer Certification",
        issuer: "ICT Academy",
        icon: Layout,
        color: "from-pink-500 to-rose-500",
        description: "Professional certification in UI development, focusing on modern frontend technologies and design principles",
        skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    }
];

// export const projects = [
//     {
//         id: 1,
//         title: "Doctor Appointment System",
//         description: "A comprehensive web application that allows users to book doctor appointments online. Features include doctor search, appointment scheduling, patient management, and real-time availability checking.",
//         image: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
//         icon: Stethoscope,
//         technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
//         github: "https://github.com/anshshukla/doctor-appointment",
//         liveDemo: "https://healhub-two.vercel.app/",
//         featured: true
//     },
//     {
//         id: 2,
//         title: "Job Portal",
//         description: "A full-featured job portal platform where companies can post job openings and candidates can search and apply for positions. Includes resume upload, job filtering, and application tracking.",
//         image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
//         icon: Building2,
//         technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
//         github: "https://github.com/anshshukla/job-portal",
//         liveDemo: "https://job-portal-demo.vercel.app",
//         featured: true
//     },
//     {
//         id: 3,
//         title: "Cab Service Portal",
//         description: "A client project for booking cab services online. Features include ride booking, fare estimation, driver tracking, and payment integration for a seamless transportation experience.",
//         image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
//         icon: Car,
//         technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Maps API"],
//         github: "https://github.com/anshshukla/cab-service",
//         liveDemo: "https://cab-service-demo.vercel.app",
//         featured: true
//     }
// ];

export const projects = [
    {
        id: 1,
        title: "Doctor Appointment System",
        description: "A comprehensive web application that allows users to book doctor appointments online. Features include doctor search, appointment scheduling, patient management, and real-time availability checking.",
        image: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
        icon: Stethoscope,
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/anshshukla/doctor-appointment",
        liveDemo: "https://healhub-two.vercel.app/",
        featured: true
    },
    {
        id: 2,
        title: "Job Portal",
        description: "A full-featured job portal platform where companies can post job openings and candidates can search and apply for positions. Includes resume upload, job filtering, and application tracking.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
        icon: Building2,
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
        github: "https://github.com/anshshukla/job-portal",
        liveDemo: "https://job-portal-demo.vercel.app",
        featured: true
    },
    {
        id: 3,
        title: "Cab Service Portal",
        description: "A client project for booking cab services online. Features include ride booking, fare estimation, driver tracking, and payment integration for a seamless transportation experience.",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
        icon: Car,
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Maps API"],
        github: "https://github.com/anshshukla/cab-service",
        liveDemo: "https://cab-service-demo.vercel.app",
        featured: true
    },

    ```
// 🔥 NEW PROJECT ADDED
{
    id: 4,
    title: "SK Auto Glow",
    description: "A real-world client project developed for SK Auto Glow, a car detailing and service business. The platform showcases services, enables customer inquiries, and provides a modern responsive UI for better user engagement and business visibility.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
    icon: Car,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "", // agar private hai to empty rehne de
    liveDemo: "https://your-live-link.com", // 🔁 apna real link daal
    featured: true
}
```

];


export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];