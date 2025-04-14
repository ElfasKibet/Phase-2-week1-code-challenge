import React from "react";
import "../App.css";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search expenses..."
      onChange={handleInputChange}
      className="search-bar"
    />
  );
};

export default SearchBar;
