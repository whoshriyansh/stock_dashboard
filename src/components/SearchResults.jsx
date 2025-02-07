import React from "react";

const SearchResults = ({ results, onStockSelect }) => {
  return (
    <ul className="absolute top-11 w-full rounded-xl h-64 overflow-y-scroll bg-secondary shadow-lg custom-scrollbar">
      {results.map((item) => (
        <li
          key={item.symbol}
          className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md transition duration-300 hover:bg-primary_gray"
          onClick={() => onStockSelect(item.symbol)}
        >
          <span className="font-medium">{item.symbol}</span>
          <span className="text-sm text-gray-500">{item.description}</span>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
