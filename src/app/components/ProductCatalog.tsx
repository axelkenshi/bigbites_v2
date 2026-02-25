import { useState, forwardRef } from "react";
import { ProductCard } from "./ProductCard";
import { FlavorAnalytics } from "./FlavorAnalytics";
import { FlavorProfileModal } from "./FlavorProfileModal";

const categories = ["Semua", "Kue Kering", "Kue Basah", "Spesial Lebaran!"];

const products = [
  {
    id: 1,
    name: "Bebas! Custom Request",
    description: "Kamu boleh diskusikan & pilih sesukanya dari produk di catalog ataupun minta dibuatkan jenis khusus, Bahkan request menu baru yang kamu inginkan 🤤 Serta kostumisasi paket bundling sesuai selera!",
    price: "Fleksibel!",
    image: "/images/product_custom.jpeg",
    tags: ["Best Seller", "Eid Special"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 90 },
      { taste: "Gurih", value: 90 },
      { taste: "Renyah", value: 90 },
      { taste: "Lembut", value: 90 },
      { taste: "Aroma", value: 90 },
      { taste: "Buttery", value: 90 },
    ]
  },
  {
    id: 2,
    name: "London Almond",
    description: "Kue kering renyah dengan taburan keju Edam asli. Gurih, premium, dan selalu jadi favorit.",
    price: "Rp 80.000",
    image: "/images/vr/londonmix_vr.jpeg",
    tags: ["Best Seller", "Eid Special"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 30 },
      { taste: "Gurih", value: 95 },
      { taste: "Renyah", value: 100 },
      { taste: "Lembut", value: 50 },
      { taste: "Aroma", value: 90 },
      { taste: "Buttery", value: 85 },
    ]
  },
  {
    id: 3,
    name: "Putri Salju",
    description: "Kue putri salju yang lembut dengan taburan gula halus. Meleleh di mulut dengan rasa cokelat premium.",
    price: "Rp 705.000",
    image: "https://images.unsplash.com/photo-1609857570980-1b6eea7b3af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjaGlwJTIwY29va2llcyUyMGhvbWVtYWRlfGVufDF8fHx8MTc3MTkwMzI2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: [],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 85 },
      { taste: "Gurih", value: 45 },
      { taste: "Renyah", value: 60 },
      { taste: "Lembut", value: 95 },
      { taste: "Aroma", value: 80 },
      { taste: "Buttery", value: 90 },
    ]
  },
  {
    id: 4,
    name: "Kue Sagu Keju",
    description: "Perpaduan sempurna antara tepung sagu dan keju premium. Renyah di luar, lembut di dalam.",
    price: "Rp 88.000",
    image: "https://images.unsplash.com/photo-1609320034420-0e15d165951e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9ydGJyZWFkJTIwY29va2llc3xlbnwxfHx8fDE3NzE5MDMyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Best Seller", "Eid Special"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 50 },
      { taste: "Gurih", value: 85 },
      { taste: "Renyah", value: 90 },
      { taste: "Lembut", value: 70 },
      { taste: "Aroma", value: 75 },
      { taste: "Buttery", value: 80 },
    ]
  },
  {
    id: 5,
    name: "Almond Crispy",
    description: "Kue kering dengan irisan almond panggang. Tekstur super renyah dengan aroma kacang almond yang khas.",
    price: "Rp 105.000",
    image: "https://images.unsplash.com/photo-1615646719741-f92cc1940a68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG1vbmQlMjBjb29raWVzfGVufDF8fHx8MTc3MTkwMzI2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Premium"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 70 },
      { taste: "Gurih", value: 65 },
      { taste: "Renyah", value: 100 },
      { taste: "Lembut", value: 55 },
      { taste: "Aroma", value: 95 },
      { taste: "Buttery", value: 70 },
    ]
  },
  {
    id: 6,
    name: "Matcha Cookies",
    description: "Kue kering dengan matcha premium dari Jepang. Rasa unik, tekstur lembut, dan aroma teh hijau yang menenangkan.",
    price: "Rp 90.000",
    image: "https://images.unsplash.com/photo-1722969345811-653f6da3edf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBjb29raWVzJTIwZ3JlZW4lMjB0ZWF8ZW58MXx8fHwxNzcxOTAzMjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 75 },
      { taste: "Gurih", value: 60 },
      { taste: "Renyah", value: 80 },
      { taste: "Lembut", value: 85 },
      { taste: "Aroma", value: 100 },
      { taste: "Buttery", value: 65 },
    ]
  },
  {
    id: 7,
    name: "japanese haku",
    description: "Kue kering dengan matcha premium dari Jepang. Rasa unik, tekstur lembut, dan aroma teh hijau yang menenangkan.",
    price: "Rp 100.000",
    image: "/images/fishh.jpg",
    tags: ["New"],
    category: "Kue Basah",
    flavorData: [
      { taste: "Manis", value: 75 },
      { taste: "Gurih", value: 60 },
      { taste: "Renyah", value: 80 },
      { taste: "Lembut", value: 85 },
      { taste: "Aroma", value: 100 },
      { taste: "Buttery", value: 65 },
    ]
  },
];

export const ProductCatalog = forwardRef<HTMLElement>((props, ref) => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = activeCategory === "Semua" 
    ? products 
    : products.filter(p => p.category === activeCategory || (activeCategory === "Spesial Lebaran!" && p.tags.includes("Eid Special")));

  const handleWhatsAppOrder = (productName: string, productPrice: string) => {
    const message = encodeURIComponent(
      `Halo Big Bites! Saya ingin memesan:\n\n` +
      ` Produk: ${productName}\n` +
      ` Harga: ${productPrice}\n\n` +
      `Mohon informasi lebih lanjut. Terima kasih!`
    );
    window.open(`https://wa.me/628156046009?text=${message}`, '_blank');
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface-cream)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--color-text-dark)] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Katalog Premium
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Pilih dari koleksi kue kering dan kue basah terbaik kami, dibuat dengan bahan premium dan resep autentik
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? "bg-[var(--color-text-dark)] text-white shadow-lg scale-105"
                  : "bg-white text-[var(--color-text-dark)] hover:bg-gray-50 shadow-sm"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid with Sidebar */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                tags={product.tags}
                flavorData={product.flavorData}
                onWhatsAppOrder={() => handleWhatsAppOrder(product.name, product.price)}
                onShowFlavorProfile={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          {/* Flavor Analytics Sidebar - Hidden on mobile/tablet */}
          <div className="hidden lg:block">
            <FlavorAnalytics />
          </div>
        </div>
      </div>

      {/* Flavor Profile Modal */}
      {selectedProduct && (
        <FlavorProfileModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          productName={selectedProduct.name}
          productImage={selectedProduct.image}
          flavorData={selectedProduct.flavorData}
        />
      )}
    </section>
  );
});

ProductCatalog.displayName = "ProductCatalog";