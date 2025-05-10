import Link from 'next/link';
import type { Experience } from '@/types';
import { SectionTitle } from '@/components/ui/section-title';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const experienceData: Experience[] = [
  {
    id: "e1",
    company: "Self-employed / Freelancer",
    period: "Apr 2025 - Current",
    role: "Freelancing and building own projects",
    location: "São Paulo, Brazil/Remote",
    roleDescription: "",
  },
  {
    id: "e2",
    company: "Condo Group GmbH",
    period: "Jul 2023 - Oct 2023",
    role: "Business Development Intern",
    location: "Hamburg, Germany",
    roleDescription: "Directed the setup and integration of Zendesk, restructuring the Property Management team to enhance operational efficiency. Delivered strategic Competitor Analyses and Business Updates, equipping investors with actionable insights. Championed B2B client onboarding and crafted a Controlling Dashboard, driving measurable performance improvements within the Renting department.",
    companyDescription: "Condo Group GmbH is a leading property management platform in Germany focused on digitizing and optimizing residential real estate management processes. The company offers innovative SaaS solutions that streamline property management operations, improve tenant communication, and enhance overall efficiency for property managers and real estate companies across the German market."
  },
  {
    id: "e3",
    company: "Sportradar Group AG (NASDAQ: SRAD)",
    period: "Feb 2022 - Jun 2022",
    role: "Corporate Development Intern",
    location: "St. Gallen, Switzerland",
    roleDescription: "Contributed to the establishment of an international joint venture valued at €10 million, delivering detailed analyses that directly influenced subsequent M&A strategies. Prepared essential documentation for potential partners, actively facilitating the exploration of international markets and supporting the company's global expansion. Conducted comprehensive research for a KYC initiative, strengthening compliance frameworks and enhancing risk management protocols.",
    companyDescription: "Sportradar Group AG is a global sports technology company and the world's leading provider of sports data intelligence. The company delivers data and content solutions to sports leagues, betting operators, and media companies worldwide. With offices in more than 30 countries, Sportradar serves as the official partner to major sports organizations including the NBA, NHL, MLB, NASCAR, FIFA, and UEFA."
  }
];

export function SkillsExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <SectionTitle as="h2" className="text-left mb-12 md:mb-16">EXPERIENCE</SectionTitle>
      
      <div className="space-y-12 md:space-y-16">
        {experienceData.map((exp, index) => (
          <div key={exp.id} className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4">
            <div className="md:col-span-3">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{exp.period}</p>
            </div>
            <div className="md:col-span-9 space-y-2">
              <h3 className="text-primary text-xl sm:text-2xl">{exp.role}</h3>
              <p className="font-medium text-foreground/80 text-base">
                {exp.company}
                {exp.location && <span className="text-muted-foreground font-normal text-sm"> • {exp.location}</span>}
              </p>
              {exp.websiteUrl && (
                <Button variant="link" asChild className="text-primary p-0 h-auto group inline-flex items-center text-xs uppercase tracking-wider -ml-0.5">
                  <Link href={exp.websiteUrl} target="_blank" rel="noopener noreferrer">
                    {exp.websiteUrl.replace(/^https?:\/\//, '')}
                  </Link>
                </Button>
              )}
              {exp.roleDescription && <p className="text-muted-foreground text-sm leading-relaxed mt-1">{exp.roleDescription}</p>}
              {exp.companyDescription && <p className="text-muted-foreground text-sm leading-relaxed mt-3 italic">{exp.companyDescription}</p>}
            </div>
            {index < experienceData.length - 1 && <div className="md:col-span-12"><Separator className="mt-8 md:mt-12" /></div>}
          </div>
        ))}
      </div>
    </section>
  );
}