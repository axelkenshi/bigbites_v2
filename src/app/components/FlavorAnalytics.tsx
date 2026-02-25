import { useState, useEffect } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { Sparkles } from "lucide-react";

const flavorData = [
  { taste: "Manis", value: 85 },
  { taste: "Gurih", value: 75 },
  { taste: "Renyah", value: 80 },
  { taste: "Lembut", value: 95 },
  { taste: "Aroma", value: 90 },
];

export function FlavorAnalytics() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="sticky top-24 bg-[var(--color-surface-cream)] rounded-3xl p-6 shadow-sm border border-[var(--color-neutral-grey)]">
        <div className="h-96 flex items-center justify-center">
          <div className="text-gray-400">Loading analytics...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-24 bg-[var(--color-surface-cream)] rounded-3xl p-6 shadow-sm border border-[var(--color-neutral-grey)] space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[var(--color-primary-matcha)]/10 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-[var(--color-primary-matcha)]" />
        </div>
      <div>
        <h3 
            className="text-xl font-bold text-[var(--color-text-dark)]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Analisis Rasa
        </h3>
          <p className="text-xs text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Profil kualitas premium
          </p>
        </div>
      </div>

      {/* Radar Chart */}
      <div className="flex justify-center items-center" style={{ width: '100%', height: '320px' }}>
        <RadarChart width={280} height={280} data={flavorData}>
          <PolarGrid stroke="#E0E0E0" />
          <PolarAngleAxis
            dataKey="taste"
            tick={{ fill: "#2D3748", fontSize: 10, fontFamily: "'DM Sans', sans-serif" }}
          />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
          <Radar
            name="Flavor"
            dataKey="value"
            stroke="#519A66"
            fill="#519A66"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>

      {/* Description */}
      <div className="bg-white rounded-2xl p-4 border-l-4 border-[var(--color-primary-matcha)]">
        <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Setiap produk kami di formulasikan dengan <strong>keseimbangan rasa sempurna</strong>. 
          Tingkat kerenyahan maksimal, aroma menggugah selera, dan tekstur yang lembut 
          menjadikan Big Bites pilihan utama untuk momen spesial Anda.
        </p>
      </div>
    </div>
  );
}