import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import DestinationCard from "./DestinationCard";

const DestinationDetailModal = ({
  data,
  onClose,
  allDestinations = [],
  onDetailClick,
}) => {
  if (!data) return null;

  const recommendations = allDestinations
    .filter((item) => item.id !== data.id && item.category === data.category)
    .slice(0, 3);

  return (
    <div className="fixed inset-0 bg-black/70 z-50 overflow-y-auto">
      <div className="min-h-full flex items-center justify-center px-4 py-10">
        <div className="bg-[#1f1f1f] text-white max-w-5xl w-full rounded-lg overflow-hidden relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl z-50 hover:text-gray-300"
          >
            &times;
          </button>

          <div
            className="relative h-64 md:h-80 bg-cover bg-center flex flex-col justify-end"
            style={{
              backgroundImage: `url(${data.picture})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative z-10 px-6 py-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {data.title}
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <FaMapMarkerAlt className="text-red-400" />
                <span>{data.location}</span>
              </div>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Deskripsi</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {data.description || "Tidak ada deskripsi tersedia."}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Fasilitas</h3>
              {data.fasilitas && data.fasilitas.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-gray-300">
                  {data.fasilitas.map((fasilitas, i) => (
                    <div key={i} className="text-sm">
                      {fasilitas.nama_fasilitas}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">Tidak ada fasilitas tersedia.</p>
              )}
            </div>
          </div>

          {recommendations.length > 0 && (
            <div className="px-6 pb-6">
              <h3 className="text-xl font-semibold mb-4">
                Rekomendasi Lainnya
              </h3>
              <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                {recommendations.map((item) => (
                  <DestinationCard
                    key={item.id}
                    item={item}
                    onDetailClick={onDetailClick}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailModal;
