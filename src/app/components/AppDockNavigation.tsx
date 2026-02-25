import { useState, useEffect } from 'react';
import { Home, Cookie, Cake, Info, Instagram, MessageCircle } from "lucide-react";

interface AppDockNavigationProps {
  onScrollToTop: () => void;
  onScrollToProducts: () => void;
  onOpenAbout: () => void;
}

export function AppDockNavigation({ onScrollToTop, onScrollToProducts, onOpenAbout }: AppDockNavigationProps) {
  const [isMobileDockVisible, setIsMobileDockVisible] = useState(true);
  const [isTabletDockVisible, setIsTabletDockVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const mobileDock = document.getElementById('app-dock-navigation');
      const tabletDock = document.getElementById('app-dock-navigation-tablet');
      const footer = document.getElementById('footer');

      if (footer) {
        const footerRect = footer.getBoundingClientRect();

        if (mobileDock) {
          const mobileDockRect = mobileDock.getBoundingClientRect();
          if (mobileDockRect.bottom > footerRect.top - 24) {
            setIsMobileDockVisible(false);
          } else {
            setIsMobileDockVisible(true);
          }
        }

        if (tabletDock) {
          const tabletDockRect = tabletDock.getBoundingClientRect();
          if (tabletDockRect.bottom > footerRect.top - 24) {
            setIsTabletDockVisible(false);
          } else {
            setIsTabletDockVisible(true);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile: Horizontal Dynamic Island Layout */}
      <div
        id="app-dock-navigation"
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden transition-opacity duration-300 ${
          isMobileDockVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="backdrop-blur-xl bg-white/90 rounded-full shadow-2xl border border-gray-200 px-4 py-3">
          <div className="flex items-center gap-1">
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
              <Cookie className="w-5 h-5 text-[var(--color-text-dark)]" />
            </button>

            <button
              onClick={onOpenAbout}
              className="p-3 rounded-full hover:bg-[var(--color-primary-matcha)]/10 transition-colors"
              aria-label="About"
            >
              <Info className="w-5 h-5 text-[var(--color-text-dark)]" />
            </button>

            <div className="w-px h-6 bg-gray-200 mx-1"></div>

            <button
              onClick={() => window.open('https://instagram.com/bigbites', '_blank')}
              className="p-3 rounded-full hover:bg-[var(--color-primary-matcha)]/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-[var(--color-primary-matcha)]" />
            </button>

            <button
              onClick={() => window.open('https://wa.me/628156046009', '_blank')}
              className="p-3 rounded-full bg-[var(--color-primary-matcha)] text-white hover:bg-[var(--color-primary-matcha)]/90 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tablet: Vertical Layout */}
      <div
        id="app-dock-navigation-tablet"
        className={`fixed bottom-6 right-6 z-50 hidden md:block lg:hidden transition-opacity duration-300 ${
            isTabletDockVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl border border-gray-200 p-3">
          <div className="flex flex-col gap-2">
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
              <Cookie className="w-5 h-5 text-[var(--color-text-dark)]" />
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

            <div className="h-px bg-gray-200 my-1"></div>

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
              onClick={() => window.open('https://wa.me/628156046009', '_blank')}
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