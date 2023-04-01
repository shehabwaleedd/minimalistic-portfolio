import React from "react";
import PropTypes from "prop-types";
import "./FilteredCategories.css"

function FilteredCategoriesTabs({ categories, selectedCategory, onCategoryClick }) {
  return (
    <div className="category__tabs">
      {categories.map((category) => (
        <span key={category} className={selectedCategory === category ? "category__button category__active" : "category__button"} onClick={() => onCategoryClick(category)}>
          {category}
        </span>
      ))}
    </div>
  );
}

FilteredCategoriesTabs.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string,
  onCategoryClick: PropTypes.func.isRequired,
};

export default FilteredCategoriesTabs;