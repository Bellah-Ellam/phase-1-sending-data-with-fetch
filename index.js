// Add your code here

function submitData(name, email) {
    const url = "http://localhost:3000/users";
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ name, email })
    };
    
    return fetch(url, config)
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        document.body.innerHTML += `<p>User ID: ${id}</p>`;
      })
      .catch(error => {
        document.body.innerHTML += `<p>Error Message: ${error.message}</p>`;
      });
  }