import React, { useState, useEffect } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { UserAuth } from "../../pages/authContext/AuthContext";
import { db } from "../../firebase-config";

export const DetailsPages = () => {
  const { id } = useParams();
  const postDocRef = doc(db, "posts", id);
  const [post, setPost] = useState(null);
  const { user } = UserAuth();
  const { currentUser } = UserAuth();

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

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog__details_container">
      <div className="blog__card_details">
        <div className="blog__image_container">
          <img src={post.imageUrls} alt="" />
        </div>
        <div className="post__tag">
          <a href="/" className="post__hashtag">
            #{post.category}
          </a>
        </div>
        <h3 className="post__title-name">{post.title}</h3>
        <p className="post__subtitle">{post.postText}</p>
        <div className="post__date">
          <div className="post__date-imgname">
            <img src={post.photoURL} />
            <span className="blog__post-author">@{post.author.name}</span>
          </div>
          <label htmlFor="">{post.date}</label>
        </div>
      </div>
    </div>
  );
};