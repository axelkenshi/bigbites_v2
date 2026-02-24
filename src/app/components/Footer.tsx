import { Cookie, Instagram, MessageCircle, ShieldCheck, FileCheck } from "lucide-react";

interface FooterProps {
  onOpenAbout: () => void;
  onOpenCertifications: () => void;
  onScrollToProducts: () => void;
}

export function Footer({ onOpenAbout, onOpenCertifications, onScrollToProducts }: FooterProps) {
  return (
    <footer className="bg-[var(--color-text-dark)] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary-matcha)] flex items-center justify-center">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Big Bites
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Kue kering premium dengan bahan berkualitas tinggi dan resep turun-temurun. 
              Halal, higienis, dan penuh cinta.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => window.open('https://instagram.com/bigbites', '_blank')}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-primary-matcha)] transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-primary-matcha)] transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Informasi */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Informasi
            </h4>
            <ul className="space-y-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="text-gray-300 hover:text-[var(--color-primary-matcha)] transition-colors"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={onScrollToProducts}
                  className="text-gray-300 hover:text-[var(--color-primary-matcha)] transition-colors"
                >
                  Cara Pemesanan
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCertifications}
                  className="text-gray-300 hover:text-[var(--color-primary-matcha)] transition-colors"
                >
                  Sertifikasi
                </button>
              </li>
            </ul>
          </div>

          {/* Kategori */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Kategori
            </h4>
            <ul className="space-y-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <li>
                <button
                  onClick={onScrollToProducts}
                  className="text-gray-300 hover:text-[var(--color-primary-matcha)] transition-colors"
                >
                  Kue Kering
                </button>
              </li>
              <li>
                <button
                  onClick={onScrollToProducts}
                  className="text-gray-300 hover:text-[var(--color-primary-matcha)] transition-colors"
                >
                  Kue Basah
                </button>
              </li>
              <li>
                <button
                  onClick={onScrollToProducts}
                  className="text-gray-300 hover:text-[var(--color-primary-matcha)] transition-colors"
                >
                  Spesial Lebaran
                </button>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Legalitas
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-[var(--color-accent-gold)]/30">
                <ShieldCheck className="w-8 h-8 text-[var(--color-accent-gold)]" />
                <div>
                  <p className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Sertifikat
                  </p>
                  <p className="font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Halal MUI
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-[var(--color-accent-gold)]/30">
                <FileCheck className="w-8 h-8 text-[var(--color-accent-gold)]" />
                <div>
                  <p className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Izin
                  </p>
                  <p className="font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    PIRT Dinkes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p style={{ fontFamily: "'DM Sans', sans-serif" }}>
              &copy; 2026 Big Bites. Semua hak dilindungi.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Dibuat dengan ❤️ untuk momen spesial Anda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
