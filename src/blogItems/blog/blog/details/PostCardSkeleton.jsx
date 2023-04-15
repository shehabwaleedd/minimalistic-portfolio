import React from "react";
import { useState } from "react";
import "./Details.css"
import FilteredCategoriesTabs from "../blog/filteredCategories/FilteredCategoriesTabs";
import SearchFilter from "../search/SearchFilter";

function PostCardSkeleton() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const categories = ["Philosophy", "Nature", "Politics", "Anime"];
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <section className="blog section">
            <h2 className="section__title">Blog</h2>
            <span className="section__subtitle">
                An Intellectual Blog Where You Find Me Talking About Everything
            </span>
            <FilteredCategoriesTabs
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryClick={handleCategoryClick}
            />
            <div className="filter__search">
                <SearchFilter />
            </div>
            <div className="post__box post__boxSkeleton">
                <div className="blog__card_details">
                    <div className="post__img post__imgSkeleton"></div>
                    <div className="post__tag post__tagSkeleton"></div>
                    <div className="post__title post__titleSkeleton"></div>
                    <div className="post__subtitle post__subtitleSkeleton"></div>
                    <div className="post__date post__dateSkeleton"></div>
                </div>
            </div>
        </section>

    );
}

export default PostCardSkeleton;