'use client';

import React from 'react';
import { SectionTitle } from '@/components/ui/section-title';
import { cn } from '@/lib/utils';

type ServiceCategory = {
  id: string;
  title: string;
  description: string;
};

const serviceCategories: ServiceCategory[] = [
  {
    id: "1",
    title: "Business Development",
    description: "I help businesses identify growth opportunities through targeted market research and competitor analysis. My approach includes streamlining operations, restructuring processes for maximum efficiency, and creating custom controlling dashboards that provide clear visibility into your key performance metrics."
  },
  {
    id: "2",
    title: "Financial Analysis",
    description: "My financial services combine sophisticated modeling techniques with practical valuation expertise to guide strategic decisions. I conduct thorough assessments of investment opportunities, weighing risks against potential returns, while implementing tailored performance metrics that drive sustainable business growth."
  },
  {
    id: "3",
    title: "Technical Solutions",
    description: "From web development and deployment to data analysis using Python and SQL, I deliver technical solutions that solve real business problems. My expertise extends to AI integration and process automation, helping organizations leverage cutting-edge technology to gain competitive advantages."
  },
  {
    id: "4",
    title: "Project Management",
    description: "I specialize in coordinating cross-departmental teams to ensure project success through clear communication and aligned objectives. With experience in international project facilitation, I navigate cultural differences while enhancing operational efficiency through strategic planning and systematic improvements."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 space-y-10">
      <SectionTitle as="h2" className="text-left mb-10 md:mb-14">
        SERVICES
      </SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {serviceCategories.map((category) => (
          <article 
            key={category.id} 
            className="bg-background border border-border/40 rounded-md p-5 shadow-sm h-full"
          >
            <h3 className="text-primary mb-3 text-base md:text-lg">
              {category.title}
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              {category.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}