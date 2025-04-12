import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search expenses..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full mb-4 p-2 border rounded"
    />
  );
};

export default SearchBar;
