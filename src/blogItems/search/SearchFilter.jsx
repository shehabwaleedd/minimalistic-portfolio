import React, { useState } from "react";
import "./SearchFilter.css"

function SearchFilter({ onFilter }) {
  const [keywords, setKeywords] = useState("");

  const handleInputChange = (event) => {
    setKeywords(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onFilter(keywords);
  };

  return (
    <form onSubmit={handleFormSubmit} className="search__form">
      <input
        type="text"
        placeholder="Search posts"
        value={keywords}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchFilter;