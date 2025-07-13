import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (

        <footer className="bg-gradient-to-t from-blue-700 via-blue-600 to-cyan-500 text-white px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

                <div className="md:col-span-2 text-left">
                    <h1 className="text-3xl font-bold mb-3">Travel.</h1>
                    <p className="text-gray-300 leading-relaxed">
                        Pilih destinasi favoritmu dan jelajahi keindahan Madiun bersama kami.
                    </p>
                </div>

                <div className="text-left">
                    <h4 className="text-lg font-semibold mb-4">Tentang</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="hover:text-white transition cursor-pointer">Bagaimana Cara Kerja</li>
                        <li className="hover:text-white transition cursor-pointer">Testimoni</li>
                        <li className="hover:text-white transition cursor-pointer">Karier</li>
                        <li className="hover:text-white transition cursor-pointer">Investor</li>
                        <li className="hover:text-white transition cursor-pointer">Syarat Layanan</li>
                    </ul>
                </div>

                <div className="text-left">
                    <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="hover:text-white transition cursor-pointer">Hubungi Kami</li>
                        <li className="hover:text-white transition cursor-pointer">Dukungan</li>
                        <li className="hover:text-white transition cursor-pointer">Destinasi</li>
                        <li className="hover:text-white transition cursor-pointer">Sponsor</li>
                    </ul>
                </div>

                <div className="text-left">
                    <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
                    <div className="flex space-x-4 text-2xl mt-1">
                        <a href="#" className="hover:text-cyan-300 transition"><FaFacebookSquare /></a>
                        <a href="#" className="hover:text-pink-400 transition"><FaInstagramSquare /></a>
                        <a href="#" className="hover:text-sky-400 transition"><FaTwitterSquare /></a>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-600 pt-4">
                &copy; {new Date().getFullYear()} Travel Madiun. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
