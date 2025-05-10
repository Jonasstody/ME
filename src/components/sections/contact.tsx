'use client';

// All form-related imports and logic have been removed.

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-normal text-primary normal-case leading-tight text-left">
            Let&apos;s Collaborate
          </h2>
          <a
            href="mailto:jonas.koerl@gmail.com"
            className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] text-primary hover:text-primary/80 font-normal pb-1 border-b border-primary whitespace-nowrap"
          >
            jonas.koerl@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
