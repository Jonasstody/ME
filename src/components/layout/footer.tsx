import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react'; // Kept for consistency with original design intent for links

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-10 md:py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-muted-foreground uppercase tracking-wider text-left">
 &copy; Koerl {currentYear}
        </p>      
        <div className="flex items-center space-x-6">
          <Link
            href="https://github.com/Jonasstody" // Placeholder for GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary uppercase tracking-wider inline-flex items-center"
          >
            GitHub
            <ArrowUpRight className="h-3 w-3 ml-0.5" />
          </Link>
          <Link
            href="https://linkedin.com/in/jonas-fabian-koerl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary uppercase tracking-wider inline-flex items-center"
          >
            LinkedIn
            <ArrowUpRight className="h-3 w-3 ml-0.5" />
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/~01cf619180a5c52c6e"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary uppercase tracking-wider inline-flex items-center"
          >
            Upwork
            <ArrowUpRight className="h-3 w-3 ml-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
