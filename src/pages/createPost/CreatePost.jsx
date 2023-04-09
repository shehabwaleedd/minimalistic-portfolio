
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";
import { UserAuth } from "../authContext/AuthContext";
import { storage } from "../../firebase-config";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { v4 } from "uuid";
import { motion } from "framer-motion";

const CreatePost = (props) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const [postTitle, setPostTitle] = useState("");

  const handlePostTextChange = (text) => {
    setPostText(text);
  };

  const handlePostTitleChange = (event) => {
    setPostTitle(event.target.value);
  };

  const imagesListRef = ref(storage, "images/");
  const { currentUser } = UserAuth();
  const navigate = useNavigate();


  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const fileId = v4();
    const imagesRef = ref(storage, `images/${fileId}`);

    try {
      await uploadBytes(imagesRef, file);
      const downloadURL = await getDownloadURL(imagesRef);
      setImageUrls([downloadURL]); // Update to set only the latest image URL
    } catch (error) {
      console.error(error);
    }
  };

  const createPost = async () => {
    setError("");
    try {
      await addDoc(postsCollectionRef, {
        title,
        imageUrls,
        postText,
        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        date: new Date().toLocaleDateString(),
        category,
        photoURL: auth.currentUser.photoURL,
      });
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
    setCategory("");
    setPostText("");
    setTitle("");
    setError("");
    setImageUrls([]);
    navigate("/blog");
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setError("");
    createPost();
    try {
      navigate("/blog");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <motion.div initial={{ y: "-100vh" }} animate={{ y: "0%" }} transition={{ duration: 0.55, ease: "easeOut" }} exit={{ opacity: 1 }}>
    <section className='create section'>
      <h2 className='section__title'>Create A Post</h2>
      <span className="section__subtitle">Post To Your Blog</span>
      <div className="create__page">
        <div className="create__container">
          <form className="create__form" onSubmit={handleCreatePost}>
            <div className="create__input-image">
              {imageUrls.map((url, index) => (
                <img key={index} src={url} />
              ))}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                placeholder="Img URL"
              />
            </div>
            <div className="create__input-title">
              <input placeholder="Title..." onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="create__input-category">
              <input className="create__input-field" placeholder="Category..." onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className="create__input-post">
              <textarea placeholder="Post..." onChange={(e) => setPostText(e.target.value)} />
            </div>
            <button className="create__button button--flex" type="submit"> Submit Post</button>
          </form>
        </div>
      </div>
    </section>
    </motion.div>
  )
}

export default CreatePost;