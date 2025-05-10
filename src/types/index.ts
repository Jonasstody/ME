export interface Project {
  id: string;
  title: string;
  subtitle?: string; // e.g., "Web Development, Design, Idea"
  year?: string;     // e.g., "2024"
  description: string;
  imageUrl?: string;
  projectUrl?: string;
  repoUrl?: string;
  tags?: string[];
  aiHint?: string;
}

export interface Experience {
  id: string;
  company: string;
  companyTagline?: string;
  period: string;
  role: string;
  location?: string;
  industry?: string;
  websiteUrl?: string;
  roleDescription: string; 
  companyDescription?: string;
}
