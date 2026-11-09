import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TransformationSection } from './components/TransformationSection';
import { Features } from './components/Features';
import { InteractiveCalculator } from './components/InteractiveCalculator';
import { ScreenshotGallery } from './components/ScreenshotGallery';
import { HowItWorks } from './components/HowItWorks';
import { ProductPricing } from './components/ProductPricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';

export const App: React.FC = () => {
  React.useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'ViewContent', {
          content_name: 'GYM PROGRESS OS — Ultimate Edition',
          content_category: 'Digital Fitness Tool',
          currency: 'INR',
          value: 199,
        });
      }
    } catch {
      // safe fallback
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080A0D] text-[#F5F7F2] font-sans antialiased overflow-x-hidden selection:bg-[#B7FF35] selection:text-[#080A0D]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Conversion Flow */}
      <main id="main-content">
        {/* 2. Hero Section (Hook + Live Interactive Dashboard Mockup) */}
        <Hero />

        {/* 3. The Core Transformation (Random Notes vs. Structured Progress) */}
        <TransformationSection />

        {/* 4. Product Capabilities (15 Interlinked Worksheets) */}
        <Features />

        {/* 5. Live Interactive Preview (Plate & Warm-Up Ramp Tool) */}
        <div id="interactive-preview">
          <InteractiveCalculator />
        </div>

        {/* 6. Product Screenshot Gallery & Lightbox */}
        <ScreenshotGallery />

        {/* 7. How It Works (3 Simple Steps) */}
        <HowItWorks />

        {/* 8. What You Get & High-Converting Price Card (₹199) */}
        <ProductPricing />

        {/* 9. Objection Handling & FAQ Accordion (Top 6 Concerns) */}
        <FAQ />

        {/* 10. Final Punchy Conversion CTA */}
        <FinalCTA />
      </main>

      {/* 11. Footer & Policies */}
      <Footer />

      {/* 12. Persistent Mobile Sticky CTA Bar */}
      <StickyMobileCTA />
    </div>
  );
};

export default App;
