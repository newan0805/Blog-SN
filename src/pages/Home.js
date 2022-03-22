import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import temp from "../assets/temp.jpg";

function Home({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
    // deletePost()
  }, []);

  const deletePost = async (id) => {
    if (window.confirm("Willing to delete the post?") === true) {
      const postDoc = doc(db, "posts", id);
      await deleteDoc(postDoc);
      getPosts();
    }
  };

  return (
    <div className="homePage">
      {postList.length === 0 ? (
        <h3 className="no-posts">No Posts...</h3>
      ) : (
        <>
          {postList.map((post) => {
            return (
              <div className="post">
                <div className="postHeader">
                  <div className="title">
                    <h1>{post.title}</h1>
                  </div>
                  <div className="deletePost">
                    { auth.currentUser.email === 'newan0805@gmail.com' && post.author.id === auth.currentUser.uid && (
                      <button
                        onClick={() => {
                          deletePost(post.id);
                        }}
                      >
                        {" "}
                        &#128465;{" "}
                      </button>
                    )}
                  </div>
                </div>
                <div className="postTextContainer">{post.postText}</div>
                <h3>@{post.author.name}</h3>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Home;
