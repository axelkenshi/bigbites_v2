import { Cookie } from "lucide-react";

interface NavbarProps {
  onScrollToProducts: () => void;
}

export function Navbar({ onScrollToProducts }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-[var(--color-neutral-grey)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[var(--color-primary-matcha)] flex items-center justify-center">
              <Cookie className="w-6 h-6 text-[var(--color-accent-orange)]" />
            </div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Big Bites
            </h1>
          </div>

          {/* Product Button */}
          <button
            onClick={onScrollToProducts}
            className="bg-[var(--color-text-dark)] text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200 shadow-md"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Lihat Produk
          </button>
        </div>
      </div>
    </nav>
  );
}
