'use client';

import { SectionTitle } from '@/components/ui/section-title';
import { Separator } from '@/components/ui/separator';

export function AboutMeSection() {
  return (
    <section id="about-me" className="py-16 md:py-24">
      <SectionTitle as="h2" className="text-left mb-12 md:mb-16">ABOUT ME</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left column - main statement */}
        <div className="md:col-span-5">
          <p className="text-xl sm:text-2xl text-primary leading-tight mb-8">
            A student looking to learn more, currently based in São Paulo exploring business and finance with a practical, analytical approach.
          </p>
          
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Education</p>
              <p className="font-medium text-foreground/80 text-base">University of St. Gallen (HSG)</p>
              <p className="font-medium text-foreground/80 text-base">FGV EASEP, São Paulo</p>
              <p className="font-medium text-foreground/80 text-base">Singapore Management University</p>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Contact</p>
              <a 
                href="mailto:jonas.koerl@gmail.com" 
                className="font-medium text-foreground/80 text-base hover:text-primary transition-colors"
              >
                jonas.koerl@gmail.com
              </a>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Connect</p>
              <a 
                href="https://www.linkedin.com/in/jonas-fabian-koerl" 
                className="font-medium text-foreground/80 text-base hover:text-primary transition-colors inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-3 w-3">
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right column - details */}
        <div className="md:col-span-7 space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Currently pursuing my Bachelor's in Business Administration at the University of St. Gallen 
            with a specialization in Finance, I'm enhancing my education through exchange 
            semesters at FGV EASEP in São Paulo and Singapore Management University with a focus on
            Financial Management, Controlling, and Entrepreneurial Finance.
          </p>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            My professional background includes restructuring property management operations 
            at Condo Group GmbH and contributing to a €10 million international joint venture 
            at Sportradar Group AG (NASDAQ: SRAD).
          </p>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            With technical skills in Python and SQL, complemented by proficiency in financial platforms 
            like Eikon, CapitalIQ, and PitchBook, I excel in data analysis, market research, 
            financial valuation, and project management.
          </p>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            I am fluent in English and German, currently learning Portuguese and Russian, and have 
            experience working and studying in an international environment.
          </p>
        </div>
      </div>
    </section>
  );
}