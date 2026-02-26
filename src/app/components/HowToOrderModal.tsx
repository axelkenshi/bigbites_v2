import { X } from 'lucide-react';

interface HowToOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HowToOrderModal({ isOpen, onClose }: HowToOrderModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold font-serif text-gray-800">Cara Pemesanan</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200">
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>1. Pilih produk yang Anda inginkan.</p>
            <p>2. Klik tombol "Pesan" pada produk yang Anda pilih.</p>
            <p>3. Anda akan diarahkan ke WhatsApp untuk mengirim pesan pesanan.</p>
            <p>4. Tim kami akan segera merespons pesanan Anda.</p>
            <p>5. Lakukan pembayaran sesuai instruksi dari tim kami.</p>
            <p>6. Pesanan Anda akan segera kami proses dan kirimkan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
