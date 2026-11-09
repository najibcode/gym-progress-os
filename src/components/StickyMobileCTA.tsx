import React, { useState, useEffect } from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import { PRODUCT, handleCheckoutRedirect } from '../constants/product';

export const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (~450px)
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#101419]/95 backdrop-blur-xl border-t border-[#28312C] px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-10px_25px_rgba(0,0,0,0.7)] animate-in slide-in-from-bottom duration-200"
      aria-label="Quick Checkout Bar"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        
        {/* Left: Product Info & Pricing */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF35]"></span>
            <span className="font-heading font-extrabold text-xs text-[#F5F7F2] tracking-wide uppercase">
              {PRODUCT.name}
            </span>
          </div>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="font-heading font-black text-lg text-[#B7FF35]">
              ₹{PRODUCT.price}
            </span>
            <span className="text-[11px] line-through text-[#737D76] font-mono">
              ₹{PRODUCT.referencePrice}
            </span>
            <span className="text-[9px] font-mono text-[#A1AAA3] uppercase">
              One-Time
            </span>
          </div>
        </div>

        {/* Right: Buy Now Button */}
        <button
          onClick={() => handleCheckoutRedirect('sticky_mobile_bottom_cta')}
          className="inline-flex items-center justify-center gap-2 bg-[#B7FF35] active:bg-[#8DDB25] text-[#080A0D] font-heading font-extrabold text-xs uppercase tracking-wider py-2.5 px-5 rounded-xl shadow-[0_0_15px_rgba(183,255,53,0.3)] shrink-0"
        >
          <Lock className="w-3.5 h-3.5" />
          <span>BUY NOW</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </aside>
  );
};

