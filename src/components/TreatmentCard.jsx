import React from "react";

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-[#1A4D2E] flex-shrink-0 mr-2"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const TreatmentCard = ({
  image,
  title,
  category,
  description,
  features,
  onButtonClick,
}) => {
  return (
    <div
      className="
        bg-white rounded-2xl shadow-md border border-gray-100 
        flex flex-col overflow-hidden
        transition-shadow duration-300 hover:shadow-xl
      "
    >
      {/* ================= IMAGE ================= */}
      {/* 🔧 FIX:
          - Mobile: h-32 (ringkas)
          - Tablet: h-40
          - Desktop: h-48
      */}
      <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-2 left-3 text-white">
          <h3 className="text-base sm:text-lg font-serif font-bold">
            {category}
          </h3>
          <p className="text-[10px] sm:text-xs opacity-90">{title}</p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      {/* 🔧 FIX:
          - Padding diperkecil di mobile
      */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {/* 🔧 FIX:
            - Mobile: max 2 baris
            - Tablet+: 3 baris
        */}
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2 sm:line-clamp-3">
          {description}
        </p>

        {/* 🔧 FIX:
            - Mobile: tampilkan max 2 feature
            - Desktop: tampilkan semua
        */}
        <ul className="space-y-2 mb-4">
          {features.slice(0, 2).map((feature, index) => (
            <li
              key={index}
              className="flex items-start text-xs sm:text-sm text-[#1A4D2E] font-medium"
            >
              <CheckIcon />
              {feature}
            </li>
          ))}

          {/* Desktop only feature tambahan */}
          <li className="hidden lg:flex items-start text-sm text-[#1A4D2E] font-medium">
            <CheckIcon />
            {features[2]}
          </li>
        </ul>

        {/* ================= BUTTON ================= */}
        <button
          onClick={onButtonClick}
          className="
            mt-auto w-full 
            bg-[#1A4D2E] text-white 
            py-2 sm:py-2.5 
            rounded-lg 
            text-xs sm:text-sm font-semibold
            hover:bg-[#143b23] transition-colors
          "
        >
          View Treatment
        </button>
      </div>
    </div>
  );
};

export default TreatmentCard;
