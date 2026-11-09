import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ProductIntro } from './components/ProductIntro';
import { Features } from './components/Features';
import { InteractiveCalculator } from './components/InteractiveCalculator';
import { ScreenshotGallery } from './components/ScreenshotGallery';
import { HowItWorks } from './components/HowItWorks';
import { AudienceSection } from './components/AudienceSection';
import { ProductPricing } from './components/ProductPricing';
import { Comparison } from './components/Comparison';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#080A0D] text-[#F5F7F2] font-sans antialiased overflow-x-hidden selection:bg-[#B7FF35] selection:text-[#080A0D]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. The Problem — Why Most People Don't Track Progress */}
        <ProblemSection />

        {/* 4. Introducing GYM PROGRESS OS */}
        <ProductIntro />

        {/* 5. Product Features (Confirmed capabilities & sheets) */}
        <Features />

        {/* Bonus Live CRO Tool: Interactive Plate & Warm-up Calculator (Sheet 7) */}
        <InteractiveCalculator />

        {/* 6. Product Screenshot Gallery with Lightbox */}
        <ScreenshotGallery />

        {/* 7. How It Works (3 Simple Steps) */}
        <HowItWorks />

        {/* 8. Who Is It For? (Audience breakdowns) */}
        <AudienceSection />

        {/* 9. What You Get & Price Card */}
        <ProductPricing />

        {/* 10. Comparison Section (Random Notes vs GYM PROGRESS OS) */}
        <Comparison />

        {/* 11. Objection Handling & FAQ Accordion */}
        <FAQ />

        {/* 12. Final Conversion Section */}
        <FinalCTA />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Purchase Bar */}
      <StickyMobileCTA />
    </div>
  );
};

export default App;
