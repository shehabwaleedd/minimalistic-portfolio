import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
import FilteredCategoriesTabs from "./FilteredCategoriesTabs";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../../loading/Loading";

const FilteredCategories = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [postLists, setPostList] = useState([]);
    const [toggleState, setToggleState] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === "All" ? "" : category);
        navigate(`/filtered/${category}`); // Navigate to the filtered categories
        const filteredPosts = category 
            ? postLists.filter((post) => post.category === category)
            : postLists;
        setPosts(filteredPosts);
    };

    const filteredPosts = selectedCategory 
  ? postLists.filter((post) => post.category === selectedCategory)
  : postLists;

    const toggleTab = (index) => {
        setToggleState(index);
    }

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true); // Set loading state to true
            const postsCollectionRef = collection(db, "posts");
            const postsQuery = category === "All" ? 
                query(postsCollectionRef) : 
                query(postsCollectionRef, where("category", "==", category));
            const postsSnapshot = await getDocs(postsQuery);
            const postsData = postsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            
            setPostList(postsData); // Update postLists state
            setIsLoading(false); // Set loading state to false
        };
        fetchPosts();
            
    }, [category]);

    const categories = ["All", "Philosophy", "Nature", "Politics", "Anime"];


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
            {isLoading ? (
                <Loading  height={100}/>
            ) : (
                <div className="grid3 container">
                    {filteredPosts.map((post) => {
                        return (
                            <motion.div layout animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 1 }} exit={{ opacity: 0, scale: 1 }} transition={{ duration: 0.5 }} className="post__box post__boxItems" key={post.id}>
                                <AnimatePresence>
                                <div className="blog__card_details">
                                    <Link to={`/details/${post.id}`} className="link">
                                        <div className="post__img">
                                            <img src={post.imageUrls} alt="" />
                                        </div>
                                        <div className="post__tag">
                                            <a
                                                href="/"
                                                className="post__hashtag"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleCategoryClick(post.category);
                                                }}
                                            >
                                                #{post.category}
                                            </a>
                                        </div>
                                        <h3 className="post__title-name">{post.title}</h3>
                                    </Link>
                                    <p className="post__subtitle">{post.postText.slice(0, 90)}...</p>
                                    <div className="post__date">
                                        <div className="post__date-imgname">
                                            <img src={post.photoURL} />
                                            <span className="blog__post-author">@{post.author.name}</span>
                                        </div>
                                        <label htmlFor="">{post.date}</label>
                                    </div>
                                </div>
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default FilteredCategories;