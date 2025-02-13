import React, { useState } from "react";
import { searchSymbol } from "../service/stock-api";
import SearchResults from "./SearchResults";
import { Icon } from "@iconify/react";

const Search = ({ onStockSelect }) => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);

  const updateBestMatches = async () => {
    if (!input) return;

    try {
      const searchResults = await searchSymbol(input);
      setBestMatches(searchResults.result);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setBestMatches([]);
    }
  };

  const handleStockSelect = (symbol) => {
    onStockSelect(symbol);
    setInput(""); // Clear input
    setBestMatches([]); // Close search results
  };

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center bg-base-100 rounded-full shadow-md">
        {/* Search Button */}
        <button
          onClick={updateBestMatches}
          className="btn btn-ghost btn-circle hover:bg-base-300"
        >
          <Icon icon="tabler:search" width="20" height="20" />
        </button>

        {/* Input Field */}
        <input
          type="text"
          value={input}
          className="input w-full bg-transparent rounded-full px-2 focus:outline-none focus:border-none text-base-content"
          placeholder="Search stock..."
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && updateBestMatches()}
        />

        {/* Clear Button */}
        {input && (
          <button
            onClick={clear}
            className="btn btn-ghost btn-circle hover:bg-base-300"
          >
            <Icon icon="akar-icons:cross" width="16" height="16" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {bestMatches.length > 0 && (
        <div className="absolute left-0 w-full mt-2 z-50">
          <SearchResults
            results={bestMatches}
            onStockSelect={handleStockSelect}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
