'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import { SectionTitle } from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const placeholderProjects: Project[] = [
  {
    id: "1",
    title: "Excel Addin",
    subtitle: "Financial Modeling & Business Planning Tools", 
    year: "2024", 
    description: "Developed a comprehensive Excel add-in designed for financial modeling, business planning, and valuation. This tool empowers financial analysts and business strategists with advanced functionalities to streamline their workflows, perform complex calculations, and generate insightful reports directly within Excel. Key features include scenario analysis, sensitivity testing, discounted cash flow (DCF) valuation models, and customizable templates for various financial statements.",
    imageUrl: "https://picsum.photos/seed/exceladdin/800/600",
    projectUrl: undefined, 
    repoUrl: undefined,
    tags: ["Excel", "VBA", "Financial Modeling", "Business Planning", "Valuation"],
    aiHint: "excel spreadsheet"
  },
  {
    id: "2",
    title: "TennisTacker.pro",
    subtitle: "Live & Historical Tennis Match Dashboard",
    year: "2025", 
    description: "An advanced dashboard providing real-time and historical data for tennis matches. TennisTracker.pro offers users detailed statistics, player performance analysis, match history, and live score tracking. The platform is designed for tennis enthusiasts, bettors, and analysts seeking comprehensive insights into professional tennis tournaments and player dynamics. Features include customizable alerts, head-to-head comparisons, and in-depth match visualizations.",
    imageUrl: "/placeholder-images/project-tennis-tracker.png", // Updated image path
    projectUrl: "https://www.TennisTracker.pro",
    repoUrl: undefined,
    tags: ["Web Development", "Data Visualization", "Sports Analytics", "Real-time Data"],
    aiHint: "tennis dashboard" // Updated AI hint
  },
];

export function ProjectsSection() {
  const projects: Project[] = placeholderProjects;

  return (
    <section id="projects" className="py-16 md:py-24 space-y-16 md:space-y-20">
      <SectionTitle as="h2" className="text-left mb-12 md:mb-16">
        PERSONAL PROJECTS
      </SectionTitle>
      
      {projects.length > 0 ? (
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <article key={project.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              <div className={cn(
                "md:col-span-5 space-y-3",
                index % 2 !== 0 && "md:order-last md:text-right" 
              )}>
                <h3 className="text-primary">{project.title}</h3>
                {project.subtitle && <p className="text-muted-foreground text-xs font-medium">{project.subtitle}</p>}
                {project.year && <p className="text-muted-foreground text-xs">{project.year}</p>}
                <p className={cn("text-muted-foreground leading-relaxed mt-2 text-sm", index % 2 !== 0 && "md:text-right")}> 
                  {project.description}
                </p>
                {project.tags && project.tags.length > 0 && (
                  <div className={cn("flex flex-wrap gap-2 mt-3", index % 2 !== 0 && "md:justify-end")}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className={cn("mt-3 space-x-3", index % 2 !== 0 && "md:justify-end md:flex")}>
                  {project.projectUrl && (
                    <Button variant="link" asChild className="text-primary p-0 h-auto group inline-flex items-center text-xs uppercase tracking-wider">
                      <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                        View Project
                      </Link>
                    </Button>
                  )}
                  {project.repoUrl && (
                     <Button variant="link" asChild className="text-muted-foreground p-0 h-auto group inline-flex items-center text-xs uppercase tracking-wider">
                      <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        View Source
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              <div className={cn(
                "md:col-span-7 relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-border/30",
                index % 2 !== 0 && "md:order-first" 
              )}>
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 ease-in-out hover:scale-105"
                    data-ai-hint={project.aiHint || "project image"}
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">Image not available</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg">No projects to display at the moment.</p>
      )}
    </section>
  );
}
