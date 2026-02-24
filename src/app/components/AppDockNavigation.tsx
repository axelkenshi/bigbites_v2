import { Home, Menu, BarChart3, Info, Instagram, MessageCircle } from "lucide-react";

interface AppDockNavigationProps {
  onScrollToTop: () => void;
  onScrollToProducts: () => void;
  onOpenAbout: () => void;
}

export function AppDockNavigation({ onScrollToTop, onScrollToProducts, onOpenAbout }: AppDockNavigationProps) {
  return (
    <>
      {/* Mobile: Horizontal Dynamic Island Layout */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div className="backdrop-blur-xl bg-white/90 rounded-full shadow-2xl border border-gray-200 px-4 py-3">
          <div className="flex items-center gap-1">
            {/* Main Navigation */}
            <button
              onClick={onScrollToTop}
              className="p-3 rounded-full hover:bg-[var(--color-primary-matcha)]/10 transition-colors"
              aria-label="Home"
            >
              <Home className="w-5 h-5 text-[var(--color-text-dark)]" />
            </button>

            <button
              onClick={onScrollToProducts}
              className="p-3 rounded-full hover:bg-[var(--color-primary-matcha)]/10 transition-colors"
              aria-label="Products"
            >
              <Menu className="w-5 h-5 text-[var(--color-text-dark)]" />
            </button>

            <button
              onClick={onOpenAbout}
              className="p-3 rounded-full hover:bg-[var(--color-primary-matcha)]/10 transition-colors"
              aria-label="About"
            >
              <Info className="w-5 h-5 text-[var(--color-text-dark)]" />
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-200 mx-1"></div>

            {/* Social Links */}
            <button
              onClick={() => window.open('https://instagram.com/bigbites', '_blank')}
              className="p-3 rounded-full hover:bg-[var(--color-primary-matcha)]/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-[var(--color-primary-matcha)]" />
            </button>

            <button
              onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              className="p-3 rounded-full bg-[var(--color-primary-matcha)] text-white hover:bg-[var(--color-primary-matcha)]/90 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tablet/Desktop: Vertical Layout */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block lg:hidden">
        <div className="backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl border border-gray-200 p-3">
          <div className="flex flex-col gap-2">
            {/* Main Navigation */}
            <button
              onClick={onScrollToTop}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-[var(--color-primary-matcha)]/10 transition-colors"
              aria-label="Home"
            >
              <Home className="w-5 h-5 text-[var(--color-text-dark)]" />
              <span className="text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Home
              </span>
            </button>

            <button
              onClick={onScrollToProducts}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-[var(--color-primary-matcha)]/10 transition-colors"
              aria-label="Products"
            >
              <Menu className="w-5 h-5 text-[var(--color-text-dark)]" />
              <span className="text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Produk
              </span>
            </button>

            <button
              onClick={onOpenAbout}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-[var(--color-primary-matcha)]/10 transition-colors"
              aria-label="About"
            >
              <Info className="w-5 h-5 text-[var(--color-text-dark)]" />
              <span className="text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Tentang
              </span>
            </button>

            {/* Divider */}
            <div className="h-px bg-gray-200 my-1"></div>

            {/* Social Links */}
            <button
              onClick={() => window.open('https://instagram.com/bigbites', '_blank')}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-[var(--color-primary-matcha)]/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-[var(--color-primary-matcha)]" />
              <span className="text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Instagram
              </span>
            </button>

            <button
              onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[var(--color-primary-matcha)] text-white hover:bg-[var(--color-primary-matcha)]/90 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                WhatsApp
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}