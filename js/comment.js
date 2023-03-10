function photoCullect() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayData(data));
}

function displayData(comments) {
  const commentContainer = document.getElementById("comment-container");
  for (const comment of comments) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `
        <h2>Title-${comment.name}</h2>
        <h3>Email-${comment.email}</h3>
        <h3>${comment.body}</h3>
        `;
    commentContainer.appendChild(commentDiv);
  }
}

photoCullect();
