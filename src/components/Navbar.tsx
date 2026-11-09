import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRODUCT, handleCheckoutRedirect } from '../constants/product';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Workbook Preview', href: '#preview' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'What’s Included', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080A0D]/90 backdrop-blur-md border-b border-[#28312C]/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Symbol */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF35] rounded-md"
            aria-label="Progress Lab - Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#151B21] border border-[#28312C] flex items-center justify-center group-hover:border-[#B7FF35]/50 transition-colors shadow-inner">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#B7FF35] shadow-[0_0_8px_#B7FF35]"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-wider text-[#F5F7F2] uppercase">
                {PRODUCT.brand}
              </span>
              <span className="text-[10px] tracking-widest text-[#737D76] uppercase font-mono">
                {PRODUCT.name}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#A1AAA3] hover:text-[#F5F7F2] transition-colors focus:outline-none focus-visible:text-[#B7FF35]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleCheckoutRedirect('navbar_cta')}
              className="inline-flex items-center gap-2 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(183,255,53,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF35] active:translate-y-0"
            >
              <span>GET GYM PROGRESS OS — ₹{PRODUCT.price}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#A1AAA3] hover:text-[#F5F7F2] bg-[#151B21] border border-[#28312C] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF35]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101419]/95 backdrop-blur-xl border-b border-[#28312C] px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#A1AAA3] hover:text-[#B7FF35] py-2 px-3 rounded-md hover:bg-[#151B21] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#28312C]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCheckoutRedirect('mobile_menu_cta');
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-bold text-sm uppercase tracking-wider py-3 px-4 rounded-lg shadow-[0_0_20px_rgba(183,255,53,0.25)]"
              >
                <span>GET GYM PROGRESS OS — ₹{PRODUCT.price}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-2 mt-2 text-[11px] text-[#737D76]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#45D483]" />
                <span>One-Time ₹{PRODUCT.price} • Razorpay Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
