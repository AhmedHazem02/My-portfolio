
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
  title: "Backend Developer",
  location: "Sohag, Egypt",
  phone: "+20-1068298970",
  email: "mailto:div.ahmedhazam@gmail.com",
  profilePic: "https://github.com/AhmedHazem02.png",
  summary: "Backend Developer specializing in .NET technologies and scalable architecture. Delivered production-ready platforms, including high-traffic e-commerce engines and digital medical systems. Optimized MSSQL database performance by 30% and integrated secure payment gateways. Committed to writing clean, testable code and driving technical solutions in Agile environments.",
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
    role: "Backend Developer",
    company: "Xfuse",
    period: "Sep 2025 – Present",
    description: [
      "Design and develop scalable backend services and APIs for production-level applications.",
      "Lead the backend architecture for key company products including e-commerce and medical platforms.",
      "Optimize database schema and queries in MSSQL to enhance system performance and reduce latency.",
      "Apply Clean Architecture principles and Design Patterns to ensure code maintainability."
    ],
    type: "Work"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "MakaStore – Production-Ready E-Commerce",
    period: "Oct 2025 – Nov 2025",
    description: "Architected the entire backend and transaction engine for an Arabic-first (RTL) e-commerce platform. Constructed a custom Order Engine to validate and manage the full order lifecycle and inventory updates. Developed a complete Payment System from scratch, handling transaction generation, webhook verification, and edge cases. Established secure admin operations for customizable store layout control and content management.",
    techStack: ["Backend Architecture", "Payment Flows", "Webhook Security", "Inventory Logic", "Vercel"],
    type: "System",
    link: "https://maka-store.vercel.app/"
  },
  {
    title: "Integrated Medical Platform (Sehaty)",
    period: "Nov 2025 – Dec 2025",
    description: "Engineered the backend for a comprehensive medical platform digitizing patient journeys (Booking, Labs, Home Services). Integrated Firebase Auth for secure authentication and Firestore for real-time data management. Incorporated online payments via Kashier and automated notifications using WhatsApp API. Orchestrated complex file workflows for prescriptions using Cloudinary and Airtable.",
    techStack: ["Firebase", "Firestore", "Kashier Payment Gateway", "WhatsApp API", "Cloudinary"],
    type: "System",
    link: "https://sehaty-86se.vercel.app/"
  },
  {
    title: "School Management System (API)",
    period: "Sep 2024 – Nov 2024",
    description: "Architected a comprehensive API for school administration using Clean Architecture and .NET Core. Enforced robust security measures using JWT authentication and role-based authorization.",
    techStack: ["C#", ".NET Core", "SQL", "Entity Framework Core", "LINQ"],
    type: "API",
    link: "https://github.com/AhmedHazem02/school-management-system"
  },
  {
    title: "Talabat E-commerce Clone (API)",
    period: "Apr 2024 – Jun 2024",
    description: "Engineered a high-performance backend system replicating core functionalities of a food delivery platform. Integrated Redis for caching frequently accessed data, significantly reducing database load.",
    techStack: ["C#", ".NET Web API", "Redis", "SQL", "AutoMapper"],
    type: "API",
    link: "https://github.com/AhmedHazem02/e-commerce-website-API-Route-/tree/master"
  },
  {
    title: "Employee Management System (MVC)",
    period: "Feb 2024 – Mar 2024",
    description: "Developed a full-stack MVC application for managing employees and departments. Implemented secure login/signup functionality and full CRUD operations with server-side validation using Clean Architecture principles.",
    techStack: ["ASP.NET Core MVC", "SQL", "Entity Framework", "Bootstrap", "HTML/CSS"],
    type: "MVC",
    link: "https://github.com/AhmedHazem02/MVC_Project_Route/tree/master"
  }
];

// ATS Rule: Education (Degrees only)
export const EDUCATION: Experience[] = [
  {
    company: "Sohag University",
    role: "Bachelor of Information Technology",
    period: "Oct 2022 – Jun 2026 (Expected)",
    type: "Education"
  }
];

// ATS Rule: Separate Section for Certifications
export const CERTIFICATIONS: Experience[] = [
  {
    company: "Route Academy",
    role: "Back-End ASP.NET Certificate",
    period: "Nov 2023 – Jun 2024",
    type: "Certificate",
    link: "https://drive.google.com/file/d/10OGnhBa2WcJwSV2iTr_PfdL0fjy9NbFr/view?pli=1"
  },
  {
    company: "Egyptian Collegiate Programming Contest",
    role: "ECPC Qualification Certificate",
    period: "2024",
    type: "Certificate",
    link: "https://drive.google.com/file/d/1-0k0nKGk8Wh6n8bzaHv42KtWaOLdOxpU/view"
  }
];

// ATS Rule: Volunteering / Achievements in separate or additional sections
export const VOLUNTEERING: Experience[] = [
  {
    role: "Head of Back-End Committee",
    company: "Smart Student Activity (Sohag University)",
    period: "Apr 2024 – Jan 2025",
    description: [
      "Spearheaded technical training for junior students and designed curriculum for backend tracks."
    ],
    type: "Volunteering"
  }
];

export const ACHIEVEMENTS: Experience[] = [
  {
    company: "Coach Academy",
    role: "Competitive Programming Training Level 3",
    period: "May 2023 – Feb 2024",
    type: "Certificate",
    link: "https://drive.google.com/file/d/1DYJZQgJAoz6sT8Vy0FZxsje-Cu3_Ohz9/view?pli=1"
  }
];

export const LANGUAGES = [
  { language: "Arabic", level: "Native" },
  { language: "English", level: "Professional Proficiency" }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["C#", "C++", "Python", "SQL"]
  },
  {
    name: "Frameworks",
    skills: [".NET Core", "ASP.NET Web API", "Entity Framework (EF)", "MVC", "LINQ"]
  },
  {
    name: "Databases",
    skills: ["MSSQL", "Redis", "Firestore"]
  },
  {
    name: "Concepts",
    skills: ["OOP", "Data Structures", "Algorithms", "SOLID Principles", "Clean Architecture", "CQRS", "Repository Pattern", "Dependency Injection"]
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Docker", "Postman", "Firebase"]
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
