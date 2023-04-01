import React, { useState } from "react"
import "./Details.css"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { getDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { UserAuth } from "../../pages/authContext/AuthContext"
import { auth, db } from "../../firebase-config";
import { Navigate } from "react-router-dom";
import Loading from "../loading/Loading";

export const DetailsPages = () => {
  const { id } = useParams()
  const postDocRef = doc(db, "posts", id);
  const [post, setPost] = useState(null);
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

  if (!post) {
    return <Loading height={100} />
  }

  return (
    <>
      <div className="blog__details container">
        <div className='blog__card_details'>
          <div className='blog__image_container'>
            <img src={post.imageUrls} alt='' />
          </div>
          <div className='post__tag'>
            <a href='/' className='post__hashtag' >#{post.category}</a>
          </div>
          <div className="blog__details_button">
            {currentUser?.uid === post.author.id && (
              <div className="blog__details_button-delete">
                <button className="button__delete" onClick={() => { deletePost(post.id) }}><i className='bx bx-x'></i></button>
              </div>
            )}
            <div className="blog__details_button-edit">
              {post.author.id === auth.currentUser.uid &&  (
                <button className="button__edit" onClick={handleEditClick}><i className='bx bx-edit'></i></button>
              )}
            </div>
          </div>
          <h3 className="post__title-name">{post.title}</h3>
          <p className="post__subtitle">{post.postText}</p>
          <div className='post__date'>
            <div className="post__date-imgname">
              <img src={post.photoURL} />
              <span className="blog__post-author">@{post.author.name}</span>
            </div>
            <label htmlFor=''>{post.date}</label>
          </div>
        </div>
      </div>
    </>
  )
}