import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { PRODUCT } from '../constants/product';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'refund' | 'contact' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#080A0D]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-2xl w-full bg-[#151B21] border border-[#28312C] rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#28312C]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#B7FF35]" />
            <h3 className="font-heading font-bold text-lg text-[#F5F7F2] uppercase">
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms & Conditions'}
              {type === 'refund' && 'Refund Policy'}
              {type === 'contact' && 'Contact Support'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-[#1B232B] text-[#A1AAA3] hover:text-[#F5F7F2]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="text-xs sm:text-sm text-[#A1AAA3] space-y-4 leading-relaxed font-normal">
          {type === 'privacy' && (
            <>
              <p>
                At <strong>{PRODUCT.brand}</strong>, we respect your privacy. GYM PROGRESS OS is an offline, standalone spreadsheet workbook. We do not track, collect, store, or sell your personal fitness data, workout logs, or body metrics.
              </p>
              <p>
                When purchasing through our official payment partner <strong>Razorpay</strong>, your payment details (such as UPI IDs, credit/debit card numbers) are processed directly by Razorpay using bank-grade 256-bit SSL encryption. We never receive or store your financial credentials.
              </p>
              <p>
                Any contact information (e.g. email address provided during checkout) is solely used to verify your transaction and facilitate digital product delivery.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                <strong>License & Usage:</strong> Upon purchasing GYM PROGRESS OS Ultimate Edition for ₹199, you are granted a non-exclusive, non-transferable personal license to use the workbook on your personal devices.
              </p>
              <p>
                <strong>Restrictions:</strong> You may not redistribute, resell, republish, or publicly share copies of the workbook file or derived commercial templates without written permission from {PRODUCT.brand}.
              </p>
              <p>
                <strong>Disclaimers:</strong> GYM PROGRESS OS is an educational organization tool. Exercise involves inherent physical risks; consult a qualified physician or healthcare professional before beginning any intense training or nutritional regimen.
              </p>
            </>
          )}

          {type === 'refund' && (
            <>
              <p>
                <strong>Digital Product Policy:</strong> Because GYM PROGRESS OS is an instantly downloadable digital asset (.xlsx workbook), standard physical goods return rules do not apply once the file has been accessed or downloaded.
              </p>
              <p>
                However, customer satisfaction and integrity are our core priorities. If you encounter any technical corruption with the workbook file or experience difficulty opening it on a supported spreadsheet application (Microsoft Excel or Google Sheets), our team will provide a verified replacement file or assist you directly.
              </p>
            </>
          )}

          {type === 'contact' && (
            <>
              <p>
                Need assistance with your workbook, order confirmation, or spreadsheet setup? We are here to support you.
              </p>
              <div className="bg-[#101419] p-4 rounded-xl border border-[#28312C] space-y-2">
                <div className="text-xs font-mono text-[#F5F7F2]">
                  <strong>Product:</strong> {PRODUCT.name} — {PRODUCT.edition}
                </div>
                <div className="text-xs font-mono text-[#F5F7F2]">
                  <strong>Brand:</strong> {PRODUCT.brand}
                </div>
                <div className="text-xs font-mono text-[#A1AAA3]">
                  <strong>Payment Partner:</strong> Razorpay Official Integration
                </div>
                <div className="text-xs font-mono text-[#B7FF35]">
                  <strong>Support Inquiries:</strong> Reach out via your Razorpay purchase receipt confirmation or contact us through our official brand channels.
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Close Button */}
        <div className="mt-6 pt-4 border-t border-[#28312C] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#1B232B] hover:bg-[#28312C] text-[#F5F7F2] font-mono text-xs uppercase px-4 py-2 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

