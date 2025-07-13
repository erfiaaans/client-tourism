import React, { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";
import DestinationDetailModal from "./DestinationDetailModal";
import Navbar from "./Navbar";
import Footer from "./Footer";

const API_URL = `${process.env.REACT_APP_API_URL}/destinasi`;

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const items = data.data || [];
        setDestinations(items);
        setFilteredDestinations(items);

        // Dapatkan kategori unik
        const uniqueCategories = ["all", ...new Set(items.map((i) => i.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Gagal mengambil data:", error));
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredDestinations(destinations);
    } else {
      setFilteredDestinations(destinations.filter((d) => d.category === category));
    }
  };

  return (
    <>
      <Navbar />

      <div className="px-6 md:px-16 py-10 bg-gradient-to-b from-white via-cyan-50 to-blue-100 min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 text-center">
          Semua Destinasi Wisata
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => handleFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border border-blue-600"
                } hover:bg-blue-700 hover:text-white`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {filteredDestinations.map((item, index) => (
            <DestinationCard
              key={index}
              item={item}
              onDetailClick={(selected) => setSelectedItem(selected)}
            />
          ))}
        </div>

        {selectedItem && (
          <DestinationDetailModal
            data={selectedItem}
            onClose={() => setSelectedItem(null)}
            allDestinations={filteredDestinations}
            onDetailClick={(item) => setSelectedItem(item)}
          />
        )}
      </div>
      <Footer />
    </>

  );
};

export default DestinationList;
