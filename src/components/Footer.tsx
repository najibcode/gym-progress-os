import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import { PRODUCT, handleCheckoutRedirect } from '../constants/product';
import { LegalModal } from './LegalModal';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'refund' | 'contact' | null>(null);

  return (
    <>
      <footer className="bg-[#080A0D] border-t border-[#28312C] text-[#A1AAA3] py-14 pb-24 md:pb-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#28312C]">
            
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-4">
              <BrandLogo size="md" />

              <p className="text-xs text-[#A1AAA3] leading-relaxed max-w-sm">
                “Tools designed to help you track your progress.” Built for trainees who value measurement, progressive overload, and long-term results.
              </p>

              <div className="flex items-center gap-2 text-[11px] text-[#737D76]">
                <ShieldCheck className="w-4 h-4 text-[#45D483]" />
                <span>Verified Razorpay Merchant Checkout Partner</span>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="md:col-span-3 space-y-3">
              <div className="font-mono text-xs font-bold uppercase text-[#F5F7F2] tracking-wider">
                Navigation
              </div>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="hover:text-[#B7FF35] transition-colors">
                    Core Features
                  </a>
                </li>
                <li>
                  <a href="#preview" className="hover:text-[#B7FF35] transition-colors">
                    Workbook Preview
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#B7FF35] transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-[#B7FF35] transition-colors">
                    What’s Included
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#B7FF35] transition-colors">
                    Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </div>

            {/* Product & Purchase Column */}
            <div className="md:col-span-4 space-y-3">
              <div className="font-mono text-xs font-bold uppercase text-[#F5F7F2] tracking-wider">
                Product
              </div>
              <div className="bg-[#101419] border border-[#28312C] rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#F5F7F2]">{PRODUCT.name}</span>
                  <span className="font-mono text-[#B7FF35] font-bold">₹{PRODUCT.price}</span>
                </div>
                <div className="text-[11px] text-[#737D76] flex items-center gap-1.5">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-[#A1AAA3]" />
                  <span>Version {PRODUCT.version} • {PRODUCT.edition}</span>
                </div>
                <button
                  onClick={() => handleCheckoutRedirect('footer_buy_cta')}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-bold text-xs uppercase py-2 px-3 rounded-lg transition-all"
                >
                  <span>Buy Now — ₹{PRODUCT.price}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Legal & Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#737D76]">
            <div>
              © 2026 {PRODUCT.brand}. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={() => setLegalModalType('privacy')}
                className="hover:text-[#F5F7F2] transition-colors focus:outline-none"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => setLegalModalType('terms')}
                className="hover:text-[#F5F7F2] transition-colors focus:outline-none"
              >
                Terms & Conditions
              </button>
              <span>•</span>
              <button
                onClick={() => setLegalModalType('refund')}
                className="hover:text-[#F5F7F2] transition-colors focus:outline-none"
              >
                Refund Policy
              </button>
              <span>•</span>
              <button
                onClick={() => setLegalModalType('contact')}
                className="hover:text-[#F5F7F2] transition-colors focus:outline-none"
              >
                Contact Support
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Reusable Legal Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </>
  );
};
