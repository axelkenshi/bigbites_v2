import { X, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

interface FlavorData {
  taste: string;
  value: number;
}

interface FlavorProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productImage: string;
  flavorData: FlavorData[];
}

export function FlavorProfileModal({ isOpen, onClose, productName, productImage, flavorData }: FlavorProfileModalProps) {
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          >
            <div 
              className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: '#4c5c3d' }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Header */}
              <div className="px-6 pt-6 pb-4">
                <h3
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Profil Rasa
                </h3>
                <p 
                  className="text-white/80 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Vivid Tase & Delicous Chart
                </p>
              </div>

              {/* Product Image */}
              <div className="px-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-xl"></div>
                  <img
                    src={productImage}
                    alt={productName}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-xl"
                  />
                </div>
              </div>

              {/* Radar Chart */}
              <div className="px-6 pb-6">
                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="flex justify-center items-center" style={{ width: '100%', height: '320px' }}>
                    <RadarChart width={300} height={300} data={flavorData}>
                      <PolarGrid 
                        stroke="rgba(255, 255, 255, 0.3)" 
                        strokeWidth={1}
                      />
                      <PolarAngleAxis
                        dataKey="taste"
                        tick={{ 
                          fill: '#ffffff', 
                          fontSize: 11,
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 500
                        }}
                      />
                      <PolarRadiusAxis 
                        angle={90} 
                        domain={[0, 100]} 
                        tick={false}
                        stroke="rgba(255, 255, 255, 0.2)"
                      />
                      <Radar
                        name={productName}
                        dataKey="value"
                        stroke="#C5A059"
                        fill="#C5A059"
                        fillOpacity={0.7}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-4 flex items-start gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <TrendingUp className="w-5 h-5 text-[var(--color-accent-gold)] flex-shrink-0 mt-0.5" />
                  <p 
                    className="text-sm text-white/90 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Diagram gurih otentik cerminan sentilan buttery kekseh.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}