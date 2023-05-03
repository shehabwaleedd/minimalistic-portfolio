import React, { useEffect, useState, useRef } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase-config";
import "./Blog.css";
import { Link } from "react-router-dom";
import FilteredCategoriesTabs from "../filteredCategories/FilteredCategoriesTabs";
import { motion, AnimatePresence } from "framer-motion";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";



function Blog() {
  const [postLists, setPostList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const postsCollectionRef = collection(db, "posts");



  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
    runAnimation();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === "All" ? "" : category);
    
  };

  const filteredPosts = postLists.filter((post) => {
    if (selectedCategory && post.category !== selectedCategory) {
      return false;
    }
    return true;
  });



  const categories = ["All", "Philosophy", "Nature", "Politics", "Anime"];

  let screen = useRef(null);
  let body = useRef(null);

  const runAnimation = () => {
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 0.5,
      width: "100%",
      left: "0%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 0.5,
      left: "100%",
      ease: Power3.easeInOut,
      delay: 0.1,
    });
    tl.set(screen, { left: "-100%" });
    TweenMax.to(body, .3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut
      }
    }).delay(1);
  }
  

  return (
    <React.Fragment>
      <div className="blog__load-container">
        <div className="blog__load-screen" ref={(el) => (screen = el)}></div>
      </div>
      <motion.div data-barba="container"  initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ duration: 0.25, ease: "easeOut" }} exit={{ opacity: 1 }}>
        
          <section  className="blog section" ref={(el) => (body = el)}>
            <h2 className="section__title">Blog</h2>
            <span className="section__subtitle">
              An Intellectual Blog Where You Find Me Talking About Everything
            </span>
            <FilteredCategoriesTabs categories={categories} selectedCategory={selectedCategory} onCategoryClick={handleCategoryClick} />
            <AnimatePresence>
              <div className="grid3 container" >
                {filteredPosts.map((post) => (
                  <motion.div
                    layout
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="post__box post__boxItems"
                    key={post.id}
                  >
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
                          <img src={post.photoURL} alt=""/>
                          <span className="blog__post-author">@{post.author.name}</span>
                        </div>
                        <label htmlFor="">{post.date}</label>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </section>
        {/* )} */}
      </motion.div>
    </React.Fragment>
  );
}

export default Blog;