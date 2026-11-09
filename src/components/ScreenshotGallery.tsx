import React, { useState, useEffect } from 'react';
import { Maximize2, X, Eye, ShieldCheck, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, PRODUCT, handleCheckoutRedirect } from '../constants/product';

export const ScreenshotGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section className="py-20 md:py-28 bg-[#080A0D] relative border-t border-[#28312C]" id="gallery">
      {/* Background Accent Glow */}
      <div 
        className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-[#B7FF35]/5 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151B21] border border-[#28312C] text-[#B7FF35] text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <Eye className="w-3.5 h-3.5 text-[#B7FF35]" />
            <span>TRANSPARENT PRODUCT PREVIEW</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7F2] uppercase tracking-tight leading-tight">
            TAKE A CLOSER LOOK <span className="text-[#B7FF35]">INSIDE.</span>
          </h2>
          <p className="mt-4 text-base text-[#A1AAA3] max-w-2xl mx-auto">
            No stock graphics. What you see is what you get. Click on any preview to inspect the workbook's layout, formulas, and visual dashboard.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer bg-[#151B21] border border-[#28312C] hover:border-[#B7FF35]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(item);
                }
              }}
              aria-label={`View full size preview of ${item.title}`}
            >
              {/* Image Preview Frame */}
              <div className="relative aspect-[16/11] bg-[#101419] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-[#080A0D]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-xs">
                  <div className="flex items-center gap-2 bg-[#B7FF35] text-[#080A0D] font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to Zoom</span>
                  </div>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 bg-[#101419]/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-[#B7FF35] border border-[#28312C]">
                  {item.category}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-[#F5F7F2] group-hover:text-[#B7FF35] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A1AAA3] leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#28312C]/60">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono bg-[#1B232B] text-[#A1AAA3] px-2 py-0.5 rounded border border-[#28312C]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Bottom Trust & CTA Row */}
        <div className="bg-[#101419] border border-[#28312C] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#45D483]/10 border border-[#45D483]/30 flex items-center justify-center text-[#45D483] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-bold text-sm text-[#F5F7F2]">
                100% Genuine Workbook Interface
              </div>
              <div className="text-xs text-[#A1AAA3]">
                Full compatibility with Microsoft Excel (desktop/mobile) & Google Sheets.
              </div>
            </div>
          </div>

          <button
            onClick={() => handleCheckoutRedirect('gallery_cta')}
            className="inline-flex items-center gap-2 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-all duration-200 shrink-0 shadow-sm"
          >
            <span>GET THE WORKBOOK — ₹{PRODUCT.price}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-[#080A0D]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          <div 
            className="relative max-w-5xl w-full bg-[#151B21] border border-[#28312C] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-4 bg-[#1B232B] border-b border-[#28312C] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B7FF35]"></span>
                <span className="font-heading font-bold text-sm sm:text-base text-[#F5F7F2]">
                  {selectedImage.title}
                </span>
                <span className="text-xs font-mono text-[#737D76] hidden sm:inline">
                  [{selectedImage.category}]
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-lg bg-[#151B21] border border-[#28312C] text-[#A1AAA3] hover:text-[#F5F7F2] hover:border-[#B7FF35] transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal High-Resolution Preview Image */}
            <div className="relative aspect-[16/10] bg-[#080A0D] max-h-[70vh] flex items-center justify-center overflow-auto">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-5 bg-[#151B21] border-t border-[#28312C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#A1AAA3] max-w-xl">
                {selectedImage.caption}
              </p>
              <button
                onClick={() => {
                  setSelectedImage(null);
                  handleCheckoutRedirect('gallery_modal_cta');
                }}
                className="inline-flex items-center gap-2 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all shrink-0"
              >
                <span>GET GYM PROGRESS OS — ₹{PRODUCT.price}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
