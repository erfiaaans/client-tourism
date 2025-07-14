
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const AboutUs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAbout = location.pathname === "/";
    return (
        <div className=" bg-gradient-to-t from-blue-100 via-cyan-50 to-white px-6 py-16 flex flex-col items-center">
            {!isAbout && (
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition mb-8 self-start"
                >
                    <FaArrowLeft className="text-sm" />
                    <span className="text-sm font-medium">Kembali</span>
                </button>
            )}
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
                    About Us
                </h1>
                <p className="text-gray-700 text-lg mb-10">
                    Kami adalah platform informasi destinasi wisata di Madiun yang bertujuan untuk membantu wisatawan menemukan tempat-tempat menarik, kuliner khas, dan landmark lokal terbaik.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">🎯 Misi Kami</h3>
                    <p className="text-gray-600">
                        Memberikan informasi terpercaya dan terkini mengenai destinasi wisata di Madiun serta mempermudah akses wisatawan dalam merencanakan kunjungan mereka.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">🌟 Visi Kami</h3>
                    <p className="text-gray-600">
                        Menjadi sumber utama eksplorasi wisata lokal yang mendukung pertumbuhan ekonomi daerah dan pelestarian budaya lokal.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">🤝 Kolaborasi</h3>
                    <p className="text-gray-600">
                        Kami bekerja sama dengan pelaku UMKM, pengelola wisata, dan pemerintah daerah untuk menghadirkan informasi akurat dan mendukung pengembangan pariwisata Madiun.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">📍 Lokasi Fokus</h3>
                    <p className="text-gray-600">
                        Fokus kami adalah daerah Madiun dan sekitarnya, termasuk kuliner khas, wisata alam, dan landmark bersejarah yang sering kurang dikenal masyarakat luas.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
