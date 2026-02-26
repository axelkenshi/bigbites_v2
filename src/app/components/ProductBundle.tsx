import { useState } from "react";
import { bundleProducts } from "./ProductBundleData";
import ProductBundleCard from "./ProductBundleCard";
import { ProductBundleModal } from "./ProductBundleModal";

export function ProductBundle() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBundle, setSelectedBundle] = useState(null);

  const handleShowDetails = (bundle) => {
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
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 pb-4">
            {bundleProducts.map((bundle) => (
              <div key={bundle.id} className="w-80 flex-shrink-0">
                <ProductBundleCard bundle={bundle} onShowDetails={() => handleShowDetails(bundle)} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProductBundleModal isOpen={isModalOpen} onClose={handleCloseModal} bundle={selectedBundle} />
    </section>
  );
}
