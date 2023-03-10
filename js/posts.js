function postData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayData(data));
}
postData();

function displayData(posts) {
  console.log(posts);
  const postCullect = document.getElementById("post-container");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
    <h3>User id-${post.id}</h3>
    <h4>${post.title}</h4>
    <p>${post.body}</p>
    `;
    postCullect.appendChild(postDiv);
  }
}
