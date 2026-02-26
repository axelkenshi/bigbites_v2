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
    image: "/images/hz/london_hz.jpeg",
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
    name: "London Almond Mix",
    description: "Kue putri salju yang lembut dengan taburan gula halus. Meleleh di mulut dengan rasa cokelat premium.",
    price: "Rp 85.000",
    image: "/images/vr/londonmix_vr.jpeg",
    tags: ["New"],
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
    name: "Putri Salju",
    description: "Kue putri salju yang lembut dengan taburan gula halus. Meleleh di mulut dengan rasa cokelat premium.",
    price: "Rp 45.000",
    image: "/images/hz/putrisalju_hz.jpg",
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
    id: 5,
    name: "Matcha",
    description: "",
    price: "Rp 0",
    image: "/images/hz/matcha_hz.jpeg",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 1 },
      { taste: "Gurih", value: 1 },
      { taste: "Renyah", value: 1 },
      { taste: "Lembut", value: 1 },
      { taste: "Aroma", value: 1 },
      { taste: "Buttery", value: 1 },
    ]
  },
  {
    id: 6,
    name: "Nastar Gulung",
    description: "",
    price: "Rp 0",
    image: "/images/hz/nastargulung_hz.jpeg",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 1 },
      { taste: "Gurih", value: 1 },
      { taste: "Renyah", value: 1 },
      { taste: "Lembut", value: 1 },
      { taste: "Aroma", value: 1 },
      { taste: "Buttery", value: 1 },
    ]
  },
  {
    id: 7,
    name: "Nastar Bulat",
    description: "",
    price: "Rp 0",
    image: "/images/vr/nastarbulat_vr.jpeg",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 1 },
      { taste: "Gurih", value: 1 },
      { taste: "Renyah", value: 1 },
      { taste: "Lembut", value: 1 },
      { taste: "Aroma", value: 1 },
      { taste: "Buttery", value: 1 },
    ]
  },
  {
    id: 8,
    name: "Nastar Roll",
    description: "",
    price: "Rp 0",
    image: "/images/vr/nastarroll_vr.jpeg",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 1 },
      { taste: "Gurih", value: 1 },
      { taste: "Renyah", value: 1 },
      { taste: "Lembut", value: 1 },
      { taste: "Aroma", value: 1 },
      { taste: "Buttery", value: 1 },
    ]
  },
  {
    id: 9,
    name: "Dencow",
    description: "",
    price: "Rp 0",
    image: "/images/hz/dencow_hz.jpeg",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 1 },
      { taste: "Gurih", value: 1 },
      { taste: "Renyah", value: 1 },
      { taste: "Lembut", value: 1 },
      { taste: "Aroma", value: 1 },
      { taste: "Buttery", value: 1 },
    ]
  },
  {
    id: 10,
    name: "Cadbury tart",
    description: "",
    price: "Rp 0",
    image: "/images/hz/cadbury_hz.jpeg",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 1 },
      { taste: "Gurih", value: 1 },
      { taste: "Renyah", value: 1 },
      { taste: "Lembut", value: 1 },
      { taste: "Aroma", value: 1 },
      { taste: "Buttery", value: 1 },
    ]
  },
  {
    id: 10,
    name: "Cadbury Cashew",
    description: "",
    price: "Rp 0",
    image: "/images/hz/cadbury2_hz.jpeg",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 1 },
      { taste: "Gurih", value: 1 },
      { taste: "Renyah", value: 1 },
      { taste: "Lembut", value: 1 },
      { taste: "Aroma", value: 1 },
      { taste: "Buttery", value: 1 },
    ]
  },
  {
    id: 11,
    name: "Eggball Cookies",
    description: "",
    price: "Rp 0",
    image: "/images/vr/eggball_vr.jpeg",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 1 },
      { taste: "Gurih", value: 1 },
      { taste: "Renyah", value: 1 },
      { taste: "Lembut", value: 1 },
      { taste: "Aroma", value: 1 },
      { taste: "Buttery", value: 1 },
    ]
  },
  {
    id: 12,
    name: "Eggball Choco",
    description: "",
    price: "Rp 0",
    image: "/images/vr/eggchoco_vr.jpeg",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 1 },
      { taste: "Gurih", value: 1 },
      { taste: "Renyah", value: 1 },
      { taste: "Lembut", value: 1 },
      { taste: "Aroma", value: 1 },
      { taste: "Buttery", value: 1 },
    ]
  },
  {
    id: 13,
    name: "Kastengel keju",
    description: "",
    price: "Rp 0",
    image: "/images/vr/kastengel_vr.jpeg",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 1 },
      { taste: "Gurih", value: 1 },
      { taste: "Renyah", value: 1 },
      { taste: "Lembut", value: 1 },
      { taste: "Aroma", value: 1 },
      { taste: "Buttery", value: 1 },
    ]
  },
  {
    id: 14,
    name: "Lotus Biscoff",
    description: "",
    price: "Rp 0",
    image: "/images/vr/lotusbiscoff_vr.jpeg",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 1 },
      { taste: "Gurih", value: 1 },
      { taste: "Renyah", value: 1 },
      { taste: "Lembut", value: 1 },
      { taste: "Aroma", value: 1 },
      { taste: "Buttery", value: 1 },
    ]
  },
  {
    id: 15,
    name: "Lotus Biscoff Mix",
    description: "",
    price: "Rp 0",
    image: "/images/vr/lotusmix_vr.jpeg",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 1 },
      { taste: "Gurih", value: 1 },
      { taste: "Renyah", value: 1 },
      { taste: "Lembut", value: 1 },
      { taste: "Aroma", value: 1 },
      { taste: "Buttery", value: 1 },
    ]
  },
  {
    id: 16,
    name: "Nutella Botton",
    description: "",
    price: "Rp 0",
    image: "/images/vr/nutella_vr.jpeg",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 1 },
      { taste: "Gurih", value: 1 },
      { taste: "Renyah", value: 1 },
      { taste: "Lembut", value: 1 },
      { taste: "Aroma", value: 1 },
      { taste: "Buttery", value: 1 },
    ]
  },
  {
    id: 17,
    name: "Palm Chese",
    description: "",
    price: "Rp 0",
    image: "/images/vr/palmchese_vr.jpeg",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 1 },
      { taste: "Gurih", value: 1 },
      { taste: "Renyah", value: 1 },
      { taste: "Lembut", value: 1 },
      { taste: "Aroma", value: 1 },
      { taste: "Buttery", value: 1 },
    ]
  },
  {
    id: 18,
    name: "peanut Mede",
    description: "",
    price: "Rp 0",
    image: "/images/vr/peanut_vr.jpeg",
    tags: ["New"],
    category: "Kue Kering",
    flavorData: [
      { taste: "Manis", value: 1 },
      { taste: "Gurih", value: 1 },
      { taste: "Renyah", value: 1 },
      { taste: "Lembut", value: 1 },
      { taste: "Aroma", value: 1 },
      { taste: "Buttery", value: 1 },
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