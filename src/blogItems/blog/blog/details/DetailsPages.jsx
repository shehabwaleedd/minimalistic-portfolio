import React, { useState } from "react"
import "./Details.css"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { getDoc, deleteDoc, doc } from "firebase/firestore";
// import { UserAuth } from "../../pages/authContext/AuthContext"
import { UserAuth } from "../../../../pages/authContext/AuthContext";
// import { auth, db } from "../../firebase-config";
import { auth, db } from "../../../../firebase-config";
import ScrollAnimation from "./ScrollAnimation";
import Loading from "../../../loading/Loading.tsx";


export const DetailsPages = () => {
  const { id } = useParams()
  const postDocRef = doc(db, "posts", id);
  const [post, setPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { currentUser } = UserAuth();
  const navigate = useNavigate();


  useEffect(() => {
    const getPost = async () => {
      const docSnap = await getDoc(postDocRef);
      if (docSnap.exists()) {
        setPost({ ...docSnap.data(), id: docSnap.id });
      } else {
        // Handle error when post is not found
      }
    };
    getPost();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    navigate("/blog");
  };

  const handleEditClick = () => {
    navigate(`/edit/${id}`);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/filtered/${category}`); // Navigate to the filtered categories
  };

  if (!post) {
    return <Loading height={100} />
  }

  return (
    <>
      <ScrollAnimation />
      <div className="blog__details container">
        <div className='blog__card_details'>
          <div className='blog__image_container'>
            <img src={post.imageUrls} alt='' />
          </div>

          <div className="blog__details_button">
            <div className='post__tag'>
              <a href="/" className="post__hashtag" onClick={(e) => { e.preventDefault(); handleCategoryClick(post.category); }} >#{post.category}</a>
            </div>
            <div className="blog__details_button">
              {auth.currentUser?.uid === post.author.id && (
                <div className="blog__details_button-delete">
                  <button className="button__delete" onClick={() => { deletePost(post.id) }}><i className='bx bx-x'></i></button>
                </div>
              )}
              <div className="blog__details_button-edit">
                {auth.currentUser?.uid === post.author.id && (
                  <button className="button__edit" onClick={handleEditClick}><i className='bx bx-edit'></i></button>
                )}
              </div>
            </div>
          </div>

          <div className="blog__details_post-text">
            <div className="blog__details_post-textanddate">
              <h3 className="post__title-name">{post.title}</h3>
              <label htmlFor=''>{post.date}</label>
            </div>
            <p className="post__subtitle">{post.postText}</p>
          </div>
          <div className='post__date'>
            <div className="details__post__date-imgname">
              <div className="details__post__date_imgname-combined">
                <img src={post.photoURL} alt=""/>
                <span className="blog__post-author">@{post.author.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}