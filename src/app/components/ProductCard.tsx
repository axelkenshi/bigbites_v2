import { MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FlavorData {
  taste: string;
  value: number;
}

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  tags?: string[];
  flavorData: FlavorData[];
  onWhatsAppOrder: () => void;
  onShowFlavorProfile: () => void;
}

export function ProductCard({ name, description, price, image, tags, flavorData, onWhatsAppOrder, onShowFlavorProfile }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div 
        className="relative h-56 overflow-hidden cursor-pointer"
        onClick={onShowFlavorProfile}
      >
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[var(--color-accent-gold)] text-white text-xs px-3 py-1 rounded-full shadow-md"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            Lihat Profil Rasa
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-3">
        <h3
          className="text-2xl font-bold text-[var(--color-text-dark)]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {name}
        </h3>
        
        <p
          className="text-sm text-gray-600 line-clamp-2 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <p
            className="text-2xl font-bold text-[var(--color-primary-matcha)]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {price}
          </p>
          
          <button
            onClick={onWhatsAppOrder}
            className="flex items-center gap-2 bg-[var(--color-primary-matcha)] text-white px-5 py-2.5 rounded-full hover:bg-[var(--color-primary-matcha)]/90 hover:scale-105 transition-all duration-200 shadow-md"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Pesan</span>
          </button>
        </div>
      </div>
    </div>
  );
}