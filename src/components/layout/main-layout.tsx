import type React from 'react';
import { Header } from './header';
import { Footer } from './footer';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-8 sm:pb-10 md:pb-12">
         {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}