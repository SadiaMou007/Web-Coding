function getPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => showPost(data));
}
showPost = (data) => {
  const posts = document.getElementById("posts");
  for (const post of data) {
    // console.log(post);
    const div = document.createElement("div");
    div.classList.add("col-lg-3");
    div.innerHTML = `
          <div class=" text-center mb-4 bg-light" >
        <div class="card-body">
        <h5 class="card-title">${post.id} </h5>
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p>
        </div>
      </div>
          `;
    posts.appendChild(div);
  }
};
getPost();
