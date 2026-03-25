const userList = document.getElementById("userList");
const search = document.getElementById("search");

let users = [];

// API call
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    users = data;
    displayUsers(users);
  });

// mostrar usuarios
function displayUsers(users) {
  userList.innerHTML = "";
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} - ${user.email}`;
    userList.appendChild(li);
  });
}

// filtro
search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(value)
  );
  displayUsers(filtered);
});
