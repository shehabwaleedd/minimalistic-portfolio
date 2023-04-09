import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import "./Blog.css";
import { UserAuth } from "../authContext/AuthContext";
import { Link } from "react-router-dom";
import FilteredCategoriesTabs from "../../blogItems/blog/filteredCategories/FilteredCategoriesTabs";
import Loading from "../../blogItems/loading/Loading";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";



function Blog() {
  const [postLists, setPostList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const postsCollectionRef = collection(db, "posts");
  const [toggleState, setToggleState] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Set loading state to true initially
  const [searchFilter, setSearchFilter] = useState(""); // Set search filter state to empty string initially
  const { user } = UserAuth();
  let navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false); // Set loading state to false when the data has finished loading
    };

    getPosts();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/filtered/${category}`); // Navigate to the filtered categories
  };


  const filteredPosts = postLists.filter((post) => {
    if (selectedCategory && post.category !== selectedCategory) { return false; }
    if (searchQuery && !(post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.postText.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }
    if (searchFilter && !(post.title.toLowerCase().includes(searchFilter.toLowerCase()) || post.postText.toLowerCase().includes(searchFilter.toLowerCase()))) {
      return false;
    }
    return true;
  });

  
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const categories = ["Philosophy", "Nature", "Politics", "Anime"];

  return (
    <motion.div initial={{ y: "100%"}} animate={{ y: "0%" }} transition={{ duration: 0.25, ease: "easeOut" }} exit={{opacity: 1}}>
      {isLoading && <Loading height={100} />}

      {/* Show loading indicator if data is being fetched */}
      {!isLoading && (
        <section className="blog section">
          <h2 className="section__title">Blog</h2>

          <span className="section__subtitle">
            An Intellectual Blog Where You Find Me Talking About Everything
          </span>
            <FilteredCategoriesTabs categories={categories} selectedCategory={selectedCategory} onCategoryClick={handleCategoryClick}/>
          <div className="grid3 container">

            {filteredPosts.map((post) => {
              return (
                <motion.div layout animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 1 }} exit={{ opacity: 0, scale: 1 }} transition={{ duration: 0.5 }} className="post__box post__boxItems" key={post.id}>
                  <AnimatePresence>
                    <div className="blog__card_details">
                      <Link to={`/details/${post.id}`} className="link">
                        <div className="post__img ">
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
                        <h3 className="post__title-name">{post.title.slice(0, 30)}...</h3>
                      </Link>
                      <p className="post__subtitle">{post.postText.slice(0, 90)}...</p>
                      <div className="post__date">
                        <div className="post__date-imgname ">
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
        </section>
      )}
    </motion.div>
  );
}

export default Blog;