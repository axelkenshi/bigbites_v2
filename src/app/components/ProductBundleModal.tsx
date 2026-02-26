import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProductBundle {
  id: number;
  name: string;
  originalPrice: number;
  specialPrice: number;
  image: string;
  description: string;
  specifications: {
    ingredients: string;
    packaging: string;
  };
}

interface ProductBundleModalProps {
  isOpen: boolean;
  onClose: () => void;
  bundle: ProductBundle | null;
}

export function ProductBundleModal({ isOpen, onClose, bundle }: ProductBundleModalProps) {
  if (!bundle) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-60"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 flex items-center justify-between rounded-t-3xl">
                <h2
                  className="text-3xl font-bold text-[var(--color-text-dark)]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {bundle.name}
                </h2>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              <div className="px-8 py-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Ingredients
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {bundle.specifications.ingredients}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Packaging
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {bundle.specifications.packaging}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
