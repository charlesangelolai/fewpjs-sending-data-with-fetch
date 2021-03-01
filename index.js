// Add your code here
function submitData(name, email) {
  let userData = {
    name: name,
    email: email,
  };

  let userConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  };

  return fetch("http://localhost:3000/users", userConfig)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (user) {
      document.body.innerHTML = user["id"];
    })
    .catch(function (error) {
      document.body.innerHTML = error.message;
    });
}
