import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl text-center">Total Post: {posts.length}</h2>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <button className="m-2 p-2 border-2"> Post:{post.id}</button>
          {"  "}
        </Link>
      ))}
      <Outlet></Outlet>
    </div>
  );
};

export default Posts;
