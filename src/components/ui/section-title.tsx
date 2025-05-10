import type React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function SectionTitle({ children, className, as: Comp = 'h2', ...props }: SectionTitleProps) {
  return (
    <Comp
      className={cn(
        "tracking-tight", // Removed size and mb classes, will inherit from global or be applied specifically
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
