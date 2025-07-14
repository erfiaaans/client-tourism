import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Service = () => {
  const scrollRef = useRef(null);
  const services = [
    {
      title: "MABOUR (Madiun Bus On Tour)",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/1046/2024/03/28/FotoJet-1-4018168431.jpg",
      description:
        "Bus wisata ini akan mengantarkan wisatawan berkeliling kota dan menikmati berbagai ikon Kota Pecel.",
    },
    {
      title: "Galeri 6 Negara",
      image:
        "https://assets.promediateknologi.id/crop/201x202:837x638/750x500/webp/photo/2023/01/12/3573256296.png",
      description:
        "Miniatur ikon 5 negara — keliling dunia tanpa harus keluar dari Madiun.",
    },
    {
      title: "Pondok Lansia",
      image:
        "https://dinsos.jatimprov.go.id/uploads/berita/kX19pTemwzI7ADMIgngNnL9pv0yQGPJOOH6jLcey.jpg",
      description:
        "Tempat pelayanan dan perawatan khusus untuk para lansia di Madiun.",
    },
    {
      title: "MABOUR (Madiun Bus On Tour)",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/1046/2024/03/28/FotoJet-1-4018168431.jpg",
      description:
        "Bus wisata ini akan mengantarkan wisatawan berkeliling kota dan menikmati berbagai ikon Kota Pecel.",
    },
    {
      title: "Galeri 6 Negara",
      image:
        "https://assets.promediateknologi.id/crop/201x202:837x638/750x500/webp/photo/2023/01/12/3573256296.png",
      description:
        "Miniatur ikon 5 negara — keliling dunia tanpa harus keluar dari Madiun.",
    },
    {
      title: "Pondok Lansia",
      image:
        "https://dinsos.jatimprov.go.id/uploads/berita/kX19pTemwzI7ADMIgngNnL9pv0yQGPJOOH6jLcey.jpg",
      description:
        "Tempat pelayanan dan perawatan khusus untuk para lansia di Madiun.",
    },
    {
      title: "MABOUR (Madiun Bus On Tour)",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/1046/2024/03/28/FotoJet-1-4018168431.jpg",
      description:
        "Bus wisata ini akan mengantarkan wisatawan berkeliling kota dan menikmati berbagai ikon Kota Pecel.",
    },
    {
      title: "Galeri 6 Negara",
      image:
        "https://assets.promediateknologi.id/crop/201x202:837x638/750x500/webp/photo/2023/01/12/3573256296.png",
      description:
        "Miniatur ikon 5 negara — keliling dunia tanpa harus keluar dari Madiun.",
    },
    {
      title: "Pondok Lansia",
      image:
        "https://dinsos.jatimprov.go.id/uploads/berita/kX19pTemwzI7ADMIgngNnL9pv0yQGPJOOH6jLcey.jpg",
      description:
        "Tempat pelayanan dan perawatan khusus untuk para lansia di Madiun.",
    },
  ];
  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const navigate = useNavigate();
  const location = useLocation();
  const isService = location.pathname === "/";
  return (
    <>
      <div className="bg-gradient-to-t from-blue-100 via-cyan-50 to-white px-6 py-8">
        {!isService && (
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition mb-8 self-start"
          >
            <FaArrowLeft className="text-sm" />
            <span className="text-sm font-medium">Kembali</span>
          </button>
        )}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">Layanan Wisata</h1>
            <p className="text-gray-600 text-lg">
              Kami menyediakan berbagai layanan wisata menarik di Kota Madiun untuk menambah pengalaman liburan kamu. Geser ke kanan untuk melihat semua layanan yang tersedia!
            </p>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => scroll("left")}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow transition"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => scroll("right")}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow transition"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="md:col-span-2 relative overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-2 pr-2"
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative group min-w-[280px] md:min-w-[350px] h-56 rounded-xl overflow-hidden cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-center bg-cover transform transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-500" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <h3 className="text-xl font-semibold drop-shadow">
                      {service.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-center px-6 text-white opacity-0 group-hover:opacity-100 transition duration-500 z-20">
                    <p className="text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;