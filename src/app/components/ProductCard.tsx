import { useState } from "react";
import { MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
  flavorData: { taste: string; value: number }[];
  onWhatsAppOrder: () => void;
  onShowFlavorProfile: () => void;
}

export function ProductCard({ name, description, price, image, tags, flavorData, onWhatsAppOrder, onShowFlavorProfile }: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getPriceStyle = (priceString: string) => {
    const length = priceString.length;
    let fontSize = "1.5rem"; // text-2xl
    if (length > 9) {
      fontSize = "1.25rem"; // text-xl
    }
    if (length > 11) {
      fontSize = "1.125rem"; // text-lg
    }
    return {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: fontSize,
    };
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div 
        className="relative h-56 overflow-hidden cursor-pointer"
        onClick={onShowFlavorProfile}
      >
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
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

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            Lihat Profil Rasa
          </span>
        </div>
      </div>

      <div className="p-6 space-y-3 flex flex-col flex-grow">
        <h3
          className="text-2xl font-bold text-[var(--color-text-dark)]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {name}
        </h3>
        
        <div className="flex-grow">
          <p
            className={`text-sm text-gray-600 leading-relaxed ${isExpanded ? "" : "line-clamp-2"}`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-end justify-end gap-x-4 gap-y-2 pt-2">
          <p
            className="font-bold text-[var(--color-primary-matcha)] mr-auto"
            style={getPriceStyle(price)}
          >
            {price}
          </p>
          
          <div className="flex items-center shrink-0">
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
              onClick={onWhatsAppOrder}
              className="flex items-center gap-2 bg-[var(--color-primary-matcha)] text-white px-4 py-2 rounded-full hover:bg-[var(--color-primary-matcha)]/90 hover:scale-105 transition-all duration-200 shadow-md text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pesan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
