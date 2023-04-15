import { useParams, useNavigate } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../../../../../pages/authContext/AuthContext";
import { useState, useEffect } from "react";
import { db } from "../../../../../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../../firebase-config";
import { v4 } from "uuid";
import Loading from "../../../../loading/Loading";
import "./EditPost.css";

const EditPage = () => {
  const { id } = useParams();
  const postDocRef = doc(db, "posts", id);
  const [post, setPost] = useState(null);
  const { user } = UserAuth();
  const { currentUser } = UserAuth();
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(post.imageUrls);



  useEffect(() => {
    const getPost = async () => {
      try {
        const docSnap = await getDoc(postDocRef);
        if (docSnap.exists()) {
          setPost({ ...docSnap.data(), id: docSnap.id });
        } else {
          setError("Post not found");
        }
      } catch (error) {
        console.error("Error getting post: ", error);
        setError("Error getting post");
      }
    };
    getPost();
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));

  };
  const handleUpdate = async (event) => {
    event.preventDefault();
    let imageUrl = post.imageUrls;
    if (imageFile) {
      const imagesRef = ref(storage, 'images/');
      const imageName = v4();
      const imageRef = ref(imagesRef, imageName);
      await uploadBytes(imageRef, imageFile);
      imageUrl = await getDownloadURL(imageRef);
    }
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const category = formData.get("category");
    const postText = formData.get("postText");
    await updateDoc(postDocRef, { title, category, postText, imageUrls: imageUrl });
    navigate(`/details/${id}`);
  };

  if (!post) {
    return <Loading height={100}/>;
  }

  return (
    <section className="edit section">
      <h2 className='section__title'>Edit Your Post</h2>
      <span className="section__subtitle">Edit Yout Post To Your Needs</span>
      <div className="edit__page">
        <div className="edit__container container grid">
          <form onSubmit={handleUpdate}>
            <div className="edit__input-image">
            {imageUrl && <img src={imageUrl} alt="Selected Image" />}
              <input type="file" name="imageUrls" defaultValue="" required onChange={handleImageChange}/>
            </div>
            <div className="edit__input-title">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" defaultValue={post.title} required />
            </div>
            <div className="edit__input-category">
              <label htmlFor="category">Category</label>
              <input type="text" name="category" defaultValue={post.category} required />
            </div>
            <div className="edit__input-post">
              <label htmlFor="postText">Post</label>
              <textarea name="postText" defaultValue={post.postText} required />
            </div>
            <button className="edit__button button--flex" type="submit">Update Post</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditPage;


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getDoc, doc, updateDoc } from "firebase/firestore";
// import { UserAuth } from "../../../pages/authContext/AuthContext";
// import { db } from "../../../firebase-config";
// import "./EditPost.css";

// const EditPage = () => {
//   const { id } = useParams();
//   const postDocRef = doc(db, "posts", id);
//   const [post, setPost] = useState(null);
//   const { user } = UserAuth();
//   const { currentUser } = UserAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const getPost = async () => {
//       const docSnap = await getDoc(postDocRef);
//       if (docSnap.exists()) {
//         setPost({ ...docSnap.data(), id: docSnap.id });
//       } else {
//         // Handle error when post is not found
//       }
//     };
//     getPost();
//   }, []);

//   const handleUpdate = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const title = formData.get("title");
//     const category = formData.get("category");
//     const postText = formData.get("postText");
//     const imageUrls = formData.get("imageUrls");
//     await updateDoc(postDocRef, { title, category, postText, imageUrls });
//     navigate(`/details/${id}`);
//   };

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <section className="edit section">
//       <h2 className='section__title'>Edit Your Post</h2>
//       <span className="section__subtitle">Edit Yout Post To Your Needs</span>
//       <div className="edit__page">
//         <div className="edit__container container grid">
//           <form onSubmit={handleUpdate}>
//             <div className="edit__input-image">
//               <label htmlFor="imageUrls">Image URL</label>
//               <input type="url" name="imageUrls" defaultValue={post.imageUrls} required />
//             </div>
//             <div className="edit__input-title">
//               <label htmlFor="title">Title</label>
//               <input type="text" name="title" defaultValue={post.title} required />
//             </div>
//             <div className="edit__input-category">
//               <label htmlFor="category">Category</label>
//               <input type="text" name="category" defaultValue={post.category} required />
//             </div>
//             <div className="edit__input-post">
//               <label htmlFor="postText">Post</label>
//               <textarea name="postText" defaultValue={post.postText} required />
//             </div>
//             <button className="edit__button button--flex" type="submit">Update Post</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EditPage; 