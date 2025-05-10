'use client';

export function HeroSection() {
  return (
    <section 
      id="hero" 
      className="min-h-[calc(100vh-4rem)] flex flex-col items-start text-left relative pt-0"
      style={{ paddingTop: 0, marginTop: 0 }}
    >
      <div className="relative z-20 w-full mt-1">
        <h1 className="mb-[-0.5rem] sm:mb-[-1rem] md:mb-[-1.5rem] animate-fade-in-up leading-none text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] tracking-tighter">
          JONAS
        </h1>
        <h1 className="mb-[-0.5rem] sm:mb-[-1rem] md:mb-[-1.5rem] animate-fade-in-up animation-delay-200 leading-none text-right text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] tracking-tighter">
          FABIAN
        </h1>
        <h1 className="mb-6 sm:mb-8 md:mb-10 animate-fade-in-up animation-delay-300 leading-none text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] tracking-tighter">
          KOERL
        </h1>
        <p className="max-w-md text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground animate-fade-in-up animation-delay-400">
          A student looking to learn more. 
        </p>
      </div>
      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0; /* Start hidden */
        }
      `}</style>
    </section>
  );
}