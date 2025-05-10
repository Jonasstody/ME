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
    roleDescription: "New things learnt so far: building websites and deploying them without relevant coding experience (using firebase, github and vercel)",
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
      
      <div className="space-y-20 md:space-y-24">
        {experienceData.map((exp) => (
          <div key={exp.id}>
            <Separator className="mb-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6">
              {/* Left Column */}
              <div className="md:col-span-4 space-y-4">
                <h3 className="text-2xl md:text-3xl text-foreground font-normal">
                  {exp.company}
                </h3>
                
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {exp.period}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider">Position</p>
                    <p className="text-primary text-xl font-normal">{exp.role}</p>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider">Location</p>
                    <p className="text-foreground">{exp.location}</p>
                  </div>
                  
                  {exp.industry && (
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider">Industry</p>
                      <p className="text-foreground">{exp.industry}</p>
                    </div>
                  )}
                  
                  {exp.websiteUrl && (
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider">Website</p>
                      <Button variant="link" asChild className="text-primary p-0 h-auto group inline-flex items-center -ml-0.5">
                        <Link href={exp.websiteUrl} target="_blank" rel="noopener noreferrer">
                          {exp.websiteUrl.replace(/^https?:\/\//, '')}
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                            <path d="M7 17L17 7"></path>
                            <path d="M7 7h10v10"></path>
                          </svg>
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Right Column */}
              <div className="md:col-span-8 space-y-4">
                {exp.roleDescription && (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.roleDescription}
                  </p>
                )}
                
                {exp.companyDescription && (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.companyDescription}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}