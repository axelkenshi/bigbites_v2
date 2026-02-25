import { Star, ShieldCheck, Wheat } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ImageCarousel from "./ImageCarousel";
import { useIsMobile } from "./ui/use-mobile";

export function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen py-20 md:py-0 px-4 sm:px-6 lg:px-8 md:flex md:items-center overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0">
        <div className="hidden md:block absolute top-20 left-10 w-96 h-96 bg-[var(--color-primary-matcha)]/10 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute bottom-20 right-10 w-80 h-80 bg-[var(--color-accent-gold)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 overflow-hidden">
            {/* Pre-order Badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-surface-cream)] px-4 py-2 rounded-full border border-[var(--color-neutral-grey)] mt-[5px]">
              <span className="w-2 h-2 bg-[var(--color-primary-matcha)] rounded-full animate-pulse"></span>
              <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Pre-order Sekarang untuk Lebaran 2026!
              </span>
            </div>

            {/* Headline */}
            <h2 
              className="text-5xl md:text-6xl font-bold text-[var(--color-text-dark)] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Kue Kering Premium{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Lezat Rasanya</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--color-primary-matcha)]/30 -z-0"></span>
              </span>
            </h2>
            
            {isMobile && <ImageCarousel containerClassName="w-full mx-auto" />}

            {/* Description Box */}
            <div 
              className="relative bg-[var(--color-primary-matcha)] text-white rounded-3xl p-8 overflow-hidden"
            >
              <Wheat className="absolute bottom-4 right-4 w-32 h-32 opacity-10" />
              <p className="relative z-10 text-lg leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Dibuat dengan <strong>Butter Wijsman</strong> asli dan resep terbaik. 
                Setiap gigitan menghadirkan kelezatan yang autentik dan kualitas premium 
                yang tak tertandingi, jelas sepadan dengan harga. Halal, higienis, dan dibuat dengan professional.
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary-matcha)] to-[var(--color-accent-gold)] border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--color-accent-gold)] text-[var(--color-accent-gold)]" />
                  ))}
                </div>
                <p className="text-sm text-[var(--color-text-dark)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <strong>110+</strong> Pelanggan Puas
                </p>
              </div>
            </div>
          </div>

          {/* Right Image - NOW VISIBLE on Mobile */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-matcha)]/20 to-[var(--color-accent-gold)]/20 rounded-full blur-2xl"></div>
              <ImageWithFallback
                src="/images/logo.jpeg"
                alt="Premium Assorted Cookies"
                className="relative rounded-full object-cover w-full h-full shadow-2xl"
              />
              
              {/* Halal Badge */}
              <div className="absolute bottom-10 left-4 bg-white rounded-2xl px-4 py-3 shadow-xl border-2 border-[var(--color-accent-gold)]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-[var(--color-accent-gold)]" />
                  <div>
                    <p className="text-xs text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Dijamin</p>
                    <p className="font-bold text-[var(--color-text-dark)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      100% Halal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
