import { FaChevronDown } from "react-icons/fa";

const DestinationCard = ({ item, onDetailClick }) => {
  if (!item.picture) return null;

  return (
    <div className="relative group w-full md:w-[400px] h-[280px] rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg">
      <img
        src={item.picture}
        alt={item.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 py-4 flex flex-col justify-end">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full capitalize">
            {item.category}
          </span>
          <button
            onClick={() => onDetailClick(item)}
            className="text-white p-2 border border-white rounded-full hover:border-gray-300 hover:text-gray-300 transition"
          >
            <FaChevronDown size={16} />
          </button>
        </div>
        <h3 className="text-white text-lg font-bold drop-shadow-md line-clamp-2">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

export default DestinationCard;
