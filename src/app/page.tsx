import { HeroSection } from '@/components/sections/hero';
import { AboutMeSection } from '@/components/sections/about-me';
import { ProjectsSection } from '@/components/sections/projects';
import { SkillsExperienceSection } from '@/components/sections/skills-experience';
import { ContactSection } from '@/components/sections/contact';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection /> {/* Corresponds to #hero */}
      <Separator className="my-10 md:my-12" />
      <AboutMeSection /> {/* New About Me section */}
      <Separator className="my-10 md:my-12" />
      <SkillsExperienceSection /> {/* Corresponds to #experience */}
      <Separator className="my-10 md:my-12" />
      <ProjectsSection /> {/* Corresponds to #projects */}
      {/* Separator before ContactSection is now handled by ContactSection's top border */}
      <ContactSection /> {/* Corresponds to #contact */}
    </div>
  );
}