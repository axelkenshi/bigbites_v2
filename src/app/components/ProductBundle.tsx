import { useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { bundleProducts } from "./ProductBundleData";
import ProductBundleCard from "./ProductBundleCard";
import { ProductBundleModal } from "./ProductBundleModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useIsMobile } from "./ui/use-mobile";

export function ProductBundle() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBundle, setSelectedBundle] = useState(null);
  const isMobile = useIsMobile();

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const handleShowDetails = (bundle: any) => {
    setSelectedBundle(bundle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBundle(null);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-serif text-gray-800">Paket Bundling</h2>
          <p className="mt-2 text-lg text-gray-600">Pilihan terbaik untuk berbagai momen spesial Anda.</p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {bundleProducts.map((bundle) => (
              <CarouselItem key={bundle.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <ProductBundleCard bundle={bundle} onShowDetails={() => handleShowDetails(bundle)} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={isMobile ? "left-[-10px]" : ""} />
          <CarouselNext className={isMobile ? "right-[-10px]" : ""} />
        </Carousel>
      </div>
      <ProductBundleModal isOpen={isModalOpen} onClose={handleCloseModal} bundle={selectedBundle} />
    </section>
  );
}
