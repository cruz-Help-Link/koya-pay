import { CheckCircleIcon, ChevronDownIcon, EyeIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const ProcessedCard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("30m");
  const dropdownRef = useRef(null);
  const filterOptions = ["7 days", "30 days", "1 year"];

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="px-5 max-w-lg lg:max-w-5xl mx-auto w-full">
      <div className="bg-[#22144F] rounded-2xl p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <CheckCircleIcon color="white" />
            <span className="text-white/80 text-sm font-medium">
              Total processed
            </span>
            <button className="opacity-70 hover:opacity-100">
              <EyeIcon />
            </button>
          </div>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-white text-[#22144F] text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm"
            >
              {selectedFilter}
              <ChevronDownIcon />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 min-w-[120px]">
                {filterOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setSelectedFilter(opt);
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2.5 text-sm text-[#22144F] hover:bg-[#F0EBFF] font-medium"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <h2 className="text-white text-[28px] font-bold">₦ 500,000.00</h2>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            className="opacity-60"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProcessedCard;
