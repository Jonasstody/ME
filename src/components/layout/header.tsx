'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, ArrowUpRight } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from 'react';


const navItems = [
  { href: '#about-me', label: 'ABOUT ME' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#contact', label: 'CONTACT' },
];

export function Header() {
  const pathname = usePathname(); 
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    setIsSheetOpen(false); 
    const element = document.getElementById(id.substring(1)); 
    if (element) {
      const headerOffset = 64; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6 text-xs text-muted-foreground">
          <div className="text-left">
            <p className="text-foreground/80">Based in</p>
            <p>São Paulo</p>
          </div>
          <div className="text-left">
            <p className="text-foreground/80">Say hello</p>
            <Link href="mailto:jonas.koerl@gmail.com" className="hover:text-primary">
              jonas.koerl@gmail.com
            </Link>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="text-xs text-muted-foreground hover:text-primary uppercase tracking-wider inline-flex items-center transition-colors"
              onClick={() => scrollToSection(item.href)}
              aria-label={`Go to ${item.label} section`}
            >
              {item.label}
              <ArrowUpRight className="h-3 w-3 ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] bg-background p-4">
              <div className="flex flex-col space-y-2 pt-6">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    className="text-sm text-muted-foreground hover:text-primary uppercase tracking-wider inline-flex items-center justify-start transition-colors"
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 ml-0.5" />
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}