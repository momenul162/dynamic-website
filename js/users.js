function usersData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayData(data));
}
function displayData(users) {
  const ul = document.getElementById("userList");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = user.email;
    ul.appendChild(li);
  }
}
