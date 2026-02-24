import { X, Award, Heart, Users, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'about' | 'certifications';
}

export function InfoModal({ isOpen, onClose, type }: InfoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-60"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 flex items-center justify-between rounded-t-3xl">
                <h2
                  className="text-3xl font-bold text-[var(--color-text-dark)]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {type === 'about' ? 'Tentang Big Bites' : 'Sertifikasi & Legalitas'}
                </h2>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="px-8 py-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {type === 'about' ? (
                  <div className="space-y-8">
                    {/* Story */}
                    <div>
                      <h3
                        className="text-2xl font-bold text-[var(--color-text-dark)] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Cerita Kami
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Big Bites lahir dari kecintaan kami terhadap kuliner tradisional Indonesia, 
                        khususnya kue kering yang selalu menjadi bagian dari momen spesial keluarga. 
                        Dimulai dari dapur rumah dengan resep turun-temurun, kami berkomitmen untuk 
                        menghadirkan kue kering premium yang terjangkau!
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Setiap produk Big Bites dibuat dengan <strong>Butter Wijsman</strong> asli, 
                        bahan premium pilihan, dan proses yang higienis. Kami percaya bahwa kualitas 
                        adalah kunci kepuasan pelanggan, dan itulah mengapa kami tidak pernah berkompromi 
                        dalam setiap tahap produksi.
                      </p>
                    </div>

                    {/* Values */}
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-[var(--color-surface-cream)] rounded-2xl">
                        <div className="w-14 h-14 rounded-full bg-[var(--color-primary-matcha)]/10 flex items-center justify-center mx-auto mb-4">
                          <Award className="w-7 h-7 text-[var(--color-primary-matcha)]" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Kualitas Premium</h4>
                        <p className="text-sm text-gray-600">
                          Bahan terbaik untuk hasil terbaik
                        </p>
                      </div>
                      <div className="text-center p-6 bg-[var(--color-surface-cream)] rounded-2xl">
                        <div className="w-14 h-14 rounded-full bg-[var(--color-primary-matcha)]/10 flex items-center justify-center mx-auto mb-4">
                          <Heart className="w-7 h-7 text-[var(--color-primary-matcha)]" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Dibuat dengan Cinta</h4>
                        <p className="text-sm text-gray-600">
                          Setiap produk adalah karya seni
                        </p>
                      </div>
                      <div className="text-center p-6 bg-[var(--color-surface-cream)] rounded-2xl">
                        <div className="w-14 h-14 rounded-full bg-[var(--color-primary-matcha)]/10 flex items-center justify-center mx-auto mb-4">
                          <Users className="w-7 h-7 text-[var(--color-primary-matcha)]" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Kepuasan Pelanggan</h4>
                        <p className="text-sm text-gray-600">
                          110+ pelanggan puas & langganan
                        </p>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="bg-[var(--color-primary-matcha)] text-white rounded-2xl p-6">
                      <h4 className="font-bold text-xl mb-2">Hubungi Kami</h4>
                      <p className="mb-4">
                        Ada pertanyaan atau ingin order? Kami siap melayani Anda!
                      </p>
                      <button
                        onClick={() => window.open('https://wa.me/628156046009', '_blank')}
                        className="bg-white text-[var(--color-primary-matcha)] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                      >
                        Chat WhatsApp
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Halal Certification */}
                    <div className="bg-[var(--color-surface-cream)] rounded-2xl p-6 border-l-4 border-[var(--color-accent-gold)]">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                          <ShieldCheck className="w-8 h-8 text-[var(--color-accent-gold)]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-2">
                            Sertifikat Halal MUI
                          </h3>
                          <p className="text-gray-700 mb-3">
                            Semua produk Big Bites telah tersertifikasi halal oleh Majelis Ulama Indonesia (MUI). 
                            Kami memastikan setiap bahan dan proses produksi memenuhi standar halal yang ketat.
                          </p>
                          <div className="bg-white rounded-lg p-3 inline-block">
                            <p className="text-sm text-gray-600">Nomor Sertifikat:</p>
                            <p className="font-bold text-[var(--color-text-dark)]">00110052961020</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PIRT */}
                    <div className="bg-[var(--color-surface-cream)] rounded-2xl p-6 border-l-4 border-[var(--color-primary-matcha)]">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                          <Award className="w-8 h-8 text-[var(--color-primary-matcha)]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-2">
                            Izin PIRT (Pangan Industri Rumah Tangga)
                          </h3>
                          <p className="text-gray-700 mb-3">
                            Produk kami telah memiliki izin PIRT dari Dinas Kesehatan, memastikan standar 
                            kebersihan dan keamanan pangan yang tinggi dalam setiap tahap produksi.
                          </p>
                          <div className="bg-white rounded-lg p-3 inline-block">
                            <p className="text-sm text-gray-600">Nomor PIRT:</p>
                            <p className="font-bold text-[var(--color-text-dark)]">2153275010536-24</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="bg-gradient-to-r from-[var(--color-primary-matcha)] to-[var(--color-accent-gold)] text-white rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-3">Komitmen Kami</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-2xl">✓</span>
                          <span>Proses produksi di dapur bersertifikat dan higienis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-2xl">✓</span>
                          <span>Bahan baku premium dan tersertifikasi halal</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-2xl">✓</span>
                          <span>Quality control ketat di setiap tahap produksi</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-2xl">✓</span>
                          <span>Packaging food-grade untuk keamanan produk</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
