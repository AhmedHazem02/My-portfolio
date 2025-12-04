
export interface Project {
  title: string;
  period: string;
  description: string;
  techStack: string[];
  link?: string;
  type: 'API' | 'MVC' | 'Console' | 'System';
}

export interface Experience {
  role?: string;
  company: string;
  period: string;
  description?: string[];
  type: 'Education' | 'Volunteering' | 'Certificate' | 'Work';
  link?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
