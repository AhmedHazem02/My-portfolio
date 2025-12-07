
import { Project, Experience, SkillCategory, Service } from './types';
import { 
  Github, 
  Linkedin, 
  Code, 
  Terminal, 
  Database, 
  Server, 
  Cpu, 
  Globe,
  Mail,
  Phone,
  Zap,
  Shield,
  Layout,
  Workflow
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Ahmed Hazem",
  title: "Back-End Developer (.NET)",
  location: "Cairo, Egypt",
  phone: "01068298970",
  email: "div.ahmedhazam@gmail.com",
  profilePic: "https://github.com/AhmedHazem02.png",
  socials: {
    github: "https://github.com/AhmedHazem02",
    linkedin: "https://www.linkedin.com/in/ahmed-hazem-84912722a/",
    email: "mailto:div.ahmedhazam@gmail.com",
    codeforces: "https://codeforces.com/profile/A.Hazem_2003",
    leetcode: "https://leetcode.com/u/A_Hazem-2003/",
    whatsapp: "https://wa.me/201068298970"
  }
};

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: "Back-End Developer",
    company: "Xfuse",
    period: "September 24, 2025 - Present",
    description: [
      "Developing scalable backend services and APIs.",
      "Contributing to system architecture and database design.",
      "Collaborating with the team to deliver high-quality software solutions."
    ],
    type: "Work"
  }
];

export const SERVICES: Service[] = [
  {
    title: ".NET Web API Development",
    description: "Building robust, scalable RESTful APIs using ASP.NET Core and secure authentication methods.",
    features: ["RESTful API Design", "JWT & Identity Security", "Dependency Injection", "Token Management"],
    icon: "Server"
  },
  {
    title: "System Architecture",
    description: "Designing maintainable systems using modern architectural patterns and best practices.",
    features: ["Clean Architecture", "CQRS Pattern", "Repository Pattern", "Design Patterns"],
    icon: "Workflow"
  },
  {
    title: "Database Engineering",
    description: "Designing and optimizing relational databases for performance and data integrity.",
    features: ["MSSQL Server", "Entity Framework Core", "LINQ Optimization", "Database Modeling"],
    icon: "Database"
  },
  {
    title: "MVC Web Applications",
    description: "Developing full-stack web applications with server-side rendering and responsive UIs.",
    features: ["ASP.NET Core MVC", "HTML5 & CSS3", "Bootstrap UI", "Server-Side Validation"],
    icon: "Layout"
  },
  {
    title: "Technical Mentorship",
    description: "Leading development sessions and guiding students in backend technologies.",
    features: ["Backend Roadmaps", "Project Architecture Guidance", "Code Reviews", "Tech Workshops"],
    icon: "Cpu"
  },
  {
    title: "Algorithmic Problem Solving",
    description: "Applying advanced data structures and algorithms to solve complex logic challenges.",
    features: ["Data Structures", "Algorithms", "C++ & Python", "Performance Optimization"],
    icon: "Zap"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "MakaStore (E-Commerce Platform)",
    period: "Xfuse | Live Production",
    description: "A production-ready, Arabic-first (RTL) e-commerce platform built for the Arab market. As the Core Backend Owner, I architected the entire 'engine room': a resilient Order Management System and a secure Payment Infrastructure handling transactions, callbacks, and signature verification. I implemented atomic inventory locking, a dynamic Admin CMS for frontend layout control (Hero sections, sliders), and a comprehensive security layer for auditing and validation. The system currently powers live stores with high reliability.",
    techStack: ["Web App", "Supabase", "System Design", "Payment Gateways", "Webhooks", "Security","CMS Logic","Vercal"],
    type: "System",
    link: "https://maka-store.vercel.app/"
  },
  {
    title: "School System (API)",
    period: "September 2024 - November 2024",
    description: "A comprehensive school management API built with .NET Core to digitize administrative workflows. The system manages complex relationships between students, teachers, classes, and subjects. Key features include automated grade calculation, attendance tracking, and timetable generation. It is built using Clean Architecture to separate concerns, ensuring the code is testable and maintainable. Security is handled via JWT authentication with granular role-based access control (RBAC).",
    techStack: ["C#", "OOP", "SQL", "Entity Framework", "LINQ", "API", "Design Patterns", "JWT", "Dependency Injection", "Token"],
    type: "API",
    link: "https://github.com/AhmedHazem02/school-management-system"
  },
  {
    title: "Talabat (API)",
    period: "April 2024 - June 2024",
    description: "A high-performance e-commerce backend modeled after the Talabat food delivery platform. It orchestrates the entire order lifecycle: restaurant listing, menu management, cart manipulation, and order processing. To optimize performance, Redis is utilized for caching frequently accessed data (like menus). The system implements the Repository and Unit of Work patterns for efficient data access and uses JWT for secure user and vendor authentication.",
    techStack: ["C#", "OOP", "SQL", "Entity Framework", "LINQ", "API", "Design Patterns", "JWT", "Dependency Injection", "Token", "Redis"],
    type: "API",
    link: "https://github.com/AhmedHazem02/e-commerce-website-API-Route-/tree/master"
  },
  {
    title: "CRUD Operations (MVC)",
    period: "February 2024 - March 2024",
    description: "A full-stack ASP.NET Core MVC web application developed for corporate employee management. It provides a responsive, user-friendly interface for HR tasks, allowing for adding, editing, and removing employee and department records. The application includes a custom-built identity system for secure login/signup and uses robust server-side validation. Data interactions are optimized using LINQ queries against an MSSQL database.",
    techStack: ["C#", "OOP", "SQL", "Entity Framework", "LINQ", "MVC", "Design Patterns", "HTML5", "CSS", "Bootstrap"],
    type: "MVC",
    link: "https://github.com/AhmedHazem02/MVC_Project_Route/tree/master"
  },
  {
    title: "Ask_Me",
    period: "January 2024 - February 2024",
    description: "An anonymous Q&A social platform simulation similar to Ask.fm. The application allows users to register, post public or anonymous questions to other users, and reply to inquiries. It features a complex relational database design to handle user threads, messages, and privacy settings efficiently. The logic layer demonstrates strong command of C# collections and LINQ for filtering and sorting message feeds.",
    techStack: ["C#", "OOP", "SQL", "Entity Framework", "LINQ"],
    type: "Console",
    link: "https://github.com/AhmedHazem02/Ask_Me/tree/master"
  },
  {
    title: "ATM System",
    period: "October 2023 - December 2023",
    description: "A secure, console-based banking system simulation designed to practice advanced Object-Oriented Programming (OOP) concepts. It encapsulates bank account data and provides a menu-driven interface for secure transactions such as deposits, withdrawals, and balance inquiries. The system implements proper validation to prevent overdrafts and uses session management to simulate real-world ATM security flows.",
    techStack: ["C#", "OOP"],
    type: "Console",
    link: "https://github.com/AhmedHazem02/ATM-Project/tree/master"
  }
];

export const EDUCATION: Experience[] = [
  {
    company: "Sohag University",
    role: "Bachelor of Information Technology",
    period: "October 2022 - June 2026",
    type: "Education"
  },
  {
    company: "Route Academy",
    role: "Back-End ASP.NET Certificate",
    period: "November 2023 - June 2024",
    type: "Certificate",
    link: "https://drive.google.com/file/d/10OGnhBa2WcJwSV2iTr_PfdL0fjy9NbFr/view?pli=1"
  },
  {
    company: "Coach Academy",
    role: "Competitive Programming Training Level 3",
    period: "May 2023 - February 2024",
    type: "Certificate",
    link: "https://drive.google.com/file/d/1DYJZQgJAoz6sT8Vy0FZxsje-Cu3_Ohz9/view?pli=1"
  }
];

export const VOLUNTEERING: Experience[] = [
  {
    role: "Head of Back-End",
    company: "Smart (Sohag University)",
    period: "April 2024 – January 2025",
    description: [
      "Led back-end development sessions and mentoring initiatives.",
      "Supported students in learning core back-end technologies and frameworks.",
      "Provided guidance on project architecture, SQL database, and server-side logic."
    ],
    type: "Volunteering"
  }
];

export const ACHIEVEMENTS: Experience[] = [
  {
    company: "ECPC",
    role: "Qualifications Collegiate Programming Contest",
    period: "2024",
    type: "Certificate",
    link: "https://drive.google.com/file/d/1-0k0nKGk8Wh6n8bzaHv42KtWaOLdOxpU/view"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages & Core",
    skills: ["C#", "C++","JavaScript", "Python", "OOP", "Problem-solving", "Data Structures", "Algorithms"]
  },
  {
    name: "Backend Technologies",
    skills: ["Web API", "MVC", "Entity Framework", "LINQ", "Identity", "JWT", "Repo Pattern", "Clean Architecture", "CQRS"]
  },
  {
    name: "Database & Infra",
    skills: ["MSSQL", "SQL", "Redis", "Networking", "Git & Github"]
  },
  {
    name: "Frontend Basics",
    skills: ["HTML5", "CSS3", "Bootstrap"]
  }
];
