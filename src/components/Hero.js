import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Hero = ({ backgroundImage, title, description, genres = [] }) => {
  const [selectedGenre, setSelectedGenre] = useState("Pilih Kategori");
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative bg-cover bg-center min-h-[80vh] px-6 md:px-16 py-24 flex flex-col justify-end"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent z-0" />

      <div className="absolute top-6 left-6 md:left-16 z-10">
        <div className="relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="bg-white/30 text-white text-base font-medium px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white/40 transition"
          >
            {selectedGenre}
            <FaChevronDown size={16} />
          </button>

          {open && (
            <ul className="absolute mt-2 grid grid-cols-2 gap-x-4 bg-white/90 text-gray-800 text-base font-medium rounded shadow-md z-20 p-2 w-max">
              {genres.map((genre, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setSelectedGenre(genre);
                    setOpen(false);
                  }}
                  className="px-3 py-2 hover:bg-blue-100 cursor-pointer rounded whitespace-nowrap"
                >
                  {genre}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">{title}</h1>
        <p className="text-base leading-relaxed mb-6 text-white drop-shadow-md">
          {description}
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-full text-sm text-white font-semibold transition">
            Mulai Jelajahi
          </button>
          <button className="bg-white/30 hover:bg-white/40 px-6 py-2 rounded-full text-sm text-white font-semibold transition">
            Lihat Detail
          </button>
          <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-sm font-bold text-white bg-white/20">
            🌄
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
