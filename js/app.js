const userList = document.getElementById("userList");
const search = document.getElementById("search");

let users = [];

// fetch con async/await (más pro que .then)
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

function displayUsers(users) {
  userList.innerHTML = "";
  
  users.forEach(user => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${user.name}</strong><br>
      ${user.email} - ${user.address.city}
    `;
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

fetchUsers();
