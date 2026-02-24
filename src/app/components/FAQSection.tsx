import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Berapa lama waktu yang dibutuhkan untuk pre-order?",
    answer: "Untuk pre-order Lebaran, kami membutuhkan minimal 5 hari sebelum hari H. Namun, kami sangat menyarankan untuk memesan 1-3 minggu sebelumnya agar kami dapat mempersiapkan dengan optimal dan memastikan kualitas terbaik."
  },
  {
    question: "Apakah produk Big Bites halal dan higienis?",
    answer: "Ya, 100% halal dan higienis! Semua produk kami dibuat di dapur bersertifikat dengan standar kebersihan tinggi. Kami menggunakan bahan-bahan halal premium dan proses produksi yang memenuhi standar PIRT (Pangan Industri Rumah Tangga)."
  },
  {
    question: "Bagaimana cara pemesanan dan pembayaran?",
    answer: "Pemesanan sangat mudah! Klik tombol 'Pesan' pada produk pilihan Anda, lalu Anda akan diarahkan ke WhatsApp kami. Tim kami akan membantu proses pemesanan dan memberikan informasi detail mengenai pembayaran. Kami menerima transfer bank dan e-wallet."
  },
  {
    question: "Apakah ada minimal order?",
    answer: "Tidak ada minimal order! Anda bisa memesan sesuai kebutuhan, mulai dari 1 toples. Namun, untuk pembelian dalam jumlah besar (lebih dari 10 toples), kami menyediakan harga spesial. Hubungi kami untuk informasi lebih lanjut."
  },
  {
    question: "Apakah produk BigBites itu mahal? dan Bagaimana bentuk kemasan menariknya?",
    answer: "Produk kami tergolong sangat murah dipasaran dengan kualitas premium dan produksi terbaik! Apalagi dikemas dengan wadah Food Grade yang aman dan bungkus beragam jenis seperti hampers, gift box, hingga handbag."
  },
  {
    question: "Bagaimana packaging dan pengiriman produk untuk daerah jauh?",
    answer: "Produk kami dikemas dengan sangat hati-hati dalam toples premium dan bubble wrap jika pemesanan luar daerah untuk memastikan kue tetap renyah dan tidak rusak saat pengiriman. Kami bekerja sama dengan jasa ekspedisi terpercaya dan menyediakan layanan antar area tertentu."
  },
  {
    question: "Berapa lama kue kering bisa bertahan?",
    answer: "Dengan penyimpanan yang tepat (dalam toples tertutup rapat di suhu ruangan), kue kering kami bisa bertahan hingga 3-4 minggu sambil tetap mempertahankan kerenyahan dan rasa premium. Hindari paparan langsung sinar matahari dan kelembaban."
  }
];

export function FAQSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--color-text-dark)] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pertanyaan Umum
          </h2>
          <p
            className="text-lg text-gray-600"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Temukan jawaban untuk pertanyaan yang sering diajukan
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[var(--color-surface-cream)] rounded-2xl border border-gray-100 px-6 overflow-hidden"
            >
              <AccordionTrigger
                className="text-left hover:no-underline py-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="font-semibold text-[var(--color-text-dark)] text-lg">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                <p style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Masih ada pertanyaan lain?
          </p>
          <button
            onClick={() => window.open('https://wa.me/628156046009?text=Halo%20Big%20Bites!%20Saya%20punya%20pertanyaan...', '_blank')}
            className="bg-[var(--color-primary-matcha)] text-white px-8 py-4 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Hubungi Kami di WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
