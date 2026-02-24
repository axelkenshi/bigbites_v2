import { useState, useRef } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProductCatalog } from "./components/ProductCatalog";
import { FAQSection } from "./components/FAQSection";
import { AppDockNavigation } from "./components/AppDockNavigation";
import { Footer } from "./components/Footer";
import { InfoModal } from "./components/InfoModal";

export default function App() {
  const [modalType, setModalType] = useState<'about' | 'certifications' | null>(null);
  const productSectionRef = useRef<HTMLElement>(null);

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

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-cream)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Navbar */}
      <Navbar onScrollToProducts={scrollToProducts} />

      {/* Hero Section */}
      <HeroSection />

      {/* Product Catalog Section */}
      <ProductCatalog ref={productSectionRef} />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer
        onOpenAbout={openAboutModal}
        onOpenCertifications={openCertificationsModal}
        onScrollToProducts={scrollToProducts}
      />

      {/* Mobile App Dock Navigation */}
      <AppDockNavigation
        onScrollToTop={scrollToTop}
        onScrollToProducts={scrollToProducts}
        onOpenAbout={openAboutModal}
      />

      {/* Info Modal */}
      <InfoModal
        isOpen={modalType !== null}
        onClose={closeModal}
        type={modalType || 'about'}
      />
    </div>
  );
}
