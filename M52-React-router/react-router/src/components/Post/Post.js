import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  console.log(post);
  return (
    <div className="text-center m-4 p-4 border-4">
      <h2 className="text-2xl">Post: {postId} </h2>
      <h5 className="text-xl">Title: {post.title}</h5>
      <h5 className="text-xl">Description: {post.body}</h5>
    </div>
  );
};

export default Post;
