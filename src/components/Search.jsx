import React, { useState } from "react";
import { searchSymbol } from "../service/stock-api";
import SearchResults from "./SearchResults";
import { Icon } from "@iconify/react/dist/iconify.js";

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
    <div className="flex items-center rounded-md relative z-50 bg-secondary">
      <button
        onClick={updateBestMatches}
        className="h-8 w-8 rounded-md flex justify-center items-center m-1 p-1 transition duration-300 hover:ring-1 ring-primary_gray"
      >
        <Icon icon="tabler:search" width="24" height="24" />
      </button>
      <input
        type="text"
        value={input}
        className="w-full px-4 py-2 focus:outline-none rounded-full bg-transparent"
        placeholder="Search stock..."
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && updateBestMatches()}
      />
      {input && (
        <button onClick={clear} className="px-2">
          <Icon icon="akar-icons:cross" className="text-sm" />
        </button>
      )}

      {bestMatches.length > 0 && (
        <SearchResults
          results={bestMatches}
          onStockSelect={handleStockSelect}
        />
      )}
    </div>
  );
};

export default Search;
