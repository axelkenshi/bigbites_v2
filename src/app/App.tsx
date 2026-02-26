import { useState, useRef } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import ImageCarousel from "./components/ImageCarousel";
import { ProductCatalog } from "./components/ProductCatalog";
import { FAQSection } from "./components/FAQSection";
import { AppDockNavigation } from "./components/AppDockNavigation";
import { Footer } from "./components/Footer";
import { InfoModal } from "./components/InfoModal";
import { HowToOrderModal } from "./components/HowToOrderModal";
import { useIsMobile } from "./components/ui/use-mobile";
import { FlavorAnalytics } from "./components/FlavorAnalytics";

export default function App() {
  const [modalType, setModalType] = useState<'about' | 'certifications' | 'how-to-order' | null>(null);
  const productSectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  const scrollToProducts = () => {
    productSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAboutModal = () => {
    setModalType('about');
  };

  const openCertificationsModal = () => {
    setModalType('certifications');
  };

  const openHowToOrderModal = () => {
    setModalType('how-to-order');
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-cream)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Navbar */}
      <Navbar onScrollToProducts={scrollToProducts} />

      {/* Hero Section */}
      <HeroSection />

      {/* Image Carousel (Desktop) */}
      {!isMobile && <ImageCarousel />}

      {/* Product Catalog Section */}
      <ProductCatalog ref={productSectionRef} />

      {/* Flavor Analytics for Mobile */}
      {isMobile && (
        <div className="px-4 sm:px-6 lg:px-8">
          <FlavorAnalytics />
        </div>
      )}

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer
        onOpenAbout={openAboutModal}
        onOpenCertifications={openCertificationsModal}
        onOpenHowToOrder={openHowToOrderModal}
        onScrollToProducts={scrollToProducts}
      />

      {/* Mobile App Dock Navigation */}
      <AppDockNavigation
        onScrollToTop={scrollToTop}
        onScrollToProducts={scrollToProducts}
        onOpenAbout={openAboutModal}
      />

      {/* Info & How-to-Order Modals */}
      <InfoModal
        isOpen={modalType === 'about' || modalType === 'certifications'}
        onClose={closeModal}
        type={modalType || 'about'}
      />
      <HowToOrderModal
        isOpen={modalType === 'how-to-order'}
        onClose={closeModal}
      />
    </div>
  );
}
