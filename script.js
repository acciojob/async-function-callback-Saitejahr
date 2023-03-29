const url = "https://jsonplaceholder.typicode.com/posts/1";
async function fetchData(callback) {
    const response = await fetch(url);
    const data = await response.json();
    callback(data);
  }
  
  function displayMessage(data) {
      document.getElementById("output").innerText = data.title;
  }
  // add onclick="fetchData(displayMessage)" on button in html.