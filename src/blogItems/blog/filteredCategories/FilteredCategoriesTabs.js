import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FilteredCategories.css"

function FilteredCategoriesTabs({ categories, selectedCategory, onCategoryClick }) {

  let [activeTab, setActiveTab] = useState(categories[0]);

  const handleTabClick = (category) => {
    setActiveTab(category === "All" ? null : category);
    onCategoryClick(category);
  };

  return (
    <div className="category__tabs flex space-x-1">
      {categories.map((category) => (
        <button
          key={category}
          className={`category__tab ${selectedCategory === category ? "" : "hover:text-gray"} relative rounded-full px-3 py-1.5 text-sm font-medium text-gray outline-sky-400 transition focus-visible:outline-2`}
          onClick={() => handleTabClick(category)}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >

          {(category === "All" && activeTab === null) || (selectedCategory === category && !(category === "All" && activeTab === null)) ? (
            <motion.span
              key={category}
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              onClick={() => onCategoryClick(category)}
            />
          ) : null}
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilteredCategoriesTabs;