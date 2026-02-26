import React, { useState } from 'react';
import { FireIcon } from '@heroicons/react/24/solid';
import { MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface ProductBundleCardProps {
  bundle: {
    id: number;
    name: string;
    originalPrice: number;
    specialPrice: number;
    image: string;
    description: string;
  };
  onShowDetails: () => void;
}

const ProductBundleCard: React.FC<ProductBundleCardProps> = ({ bundle, onShowDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppOrder = () => {
    const message = `Hi Big Bites! saya mau tanya terkait Paket bundling dari website resminya, yaitu:\n\nPaket: ${bundle.name}\nHarga: Rp ${bundle.specialPrice.toLocaleString('id-ID')}\nQuantity: 1 \n\nMohon informasinya lebih lanjut!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/628156046009?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div
        className="relative h-56 overflow-hidden cursor-pointer"
        onClick={onShowDetails}
      >
        <img
          src={bundle.image}
          alt={bundle.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            View package
          </span>
        </div>
      </div>
      <div className="p-6 space-y-3 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-[var(--color-text-dark)]" style={{ fontFamily: "'Playfair Display', serif" }}>
          {bundle.name}
        </h3>
        <div className="flex-grow">
          <p className={`text-sm text-gray-600 leading-relaxed ${isExpanded ? "" : "line-clamp-2"}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {bundle.description}
          </p>
        </div>

        <div className="text-center pt-2">
            <div className="flex justify-center items-center text-red-500">
                <FireIcon className="w-5 h-5 mr-1" />
                <p className="line-through text-sm">Rp {bundle.originalPrice.toLocaleString('id-ID')}</p>
            </div>
            <p className="text-green-600 font-bold text-2xl">Rp {bundle.specialPrice.toLocaleString('id-ID')}</p>
        </div>
        
        <div className="flex items-center justify-end gap-x-2 pt-2">
           <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <button
              onClick={handleWhatsAppOrder}
              className="flex items-center gap-2 bg-[var(--color-primary-matcha)] text-white px-4 py-2 rounded-full hover:bg-[var(--color-primary-matcha)]/90 hover:scale-105 transition-all duration-200 shadow-md text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pesan</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBundleCard;
