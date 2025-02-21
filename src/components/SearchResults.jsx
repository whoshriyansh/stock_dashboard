import React from "react";

const SearchResults = ({ results, onStockSelect }) => {
  return (
    <ul className="absolute top-1 w-full rounded-xl h-64 overflow-y-scroll bg-card shadow-lg custom-scrollbar">
      {results.map((item) => (
        <li
          key={item.symbol}
          className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md transition duration-300 hover:bg-[#8957FF]/30 border-b-1 border-dashed border-[#8957FF]/50"
          onClick={() => onStockSelect(item.symbol)}
        >
          <span className="font-medium text-primary-text">{item.symbol}</span>
          <span className="text-sm text-secondary-text">
            {item.description}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
