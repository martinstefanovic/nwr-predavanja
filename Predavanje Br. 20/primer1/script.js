const allUsersElement = document.getElementById('all-users');

function getAllUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      json.forEach((user) => {
        allUsers.push(user);
        createUser(user);
      });
      console.log('UNUTAR FETCH', allUsers);
    });
}

function createUser(user) {
  const userContainer = document.createElement('div');
  userContainer.classList = 'm-3 p-4 border';
  // User name
  const userNameElement = document.createElement('h2');
  userNameElement.innerText = user.name;
  userNameElement.classList = 'text-xl font-medium';
  // User email
  const userEmailElement = document.createElement('span');
  userEmailElement.innerText = user.email;
  userEmailElement.classList = 'text-slate-400';
  // View more link
  const viewMoreBtn = document.createElement('a');
  viewMoreBtn.innerText = 'View more';
  viewMoreBtn.classList = 'bg-rose-500 text-white p-2 block w-fit mt-3';
  viewMoreBtn.setAttribute('href', `single.html?userId=${user.id}`);
  // Append name & email to container
  userContainer.appendChild(userNameElement);
  userContainer.appendChild(userEmailElement);
  userContainer.appendChild(viewMoreBtn);

  // Add user container to list of users
  allUsersElement.appendChild(userContainer);
}

getAllUsers();
