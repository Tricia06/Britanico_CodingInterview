// app.js
const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

var animalsArray = ["Elephant", "Eagle", "Dragonfly"];

console.log("Part I: Categorize");
displayByCategory(animalsArray);

console.log("Part II: API Endpoint");
additionalInfo(animalsArray[0]);


function displayByCategory(animalsArray){
  let animalsCategory = {
    Mammals: [],
    Birds: [],
    Insects: []
  }
  
  for (let x in animalsArray) {
    animal = animalsArray[x];
  
    if (animal == 'Elephant') {
      animalsCategory.Mammals.push(animal);
    } else if (animal == 'Eagle') {
      animalsCategory.Birds.push(animal);
    } else if (animal == 'Dragonfly') {
      animalsCategory.Insects.push(animal);
    }
  }
  
  console.log(animalsCategory);
}

function additionalInfo(name){
  axios({
    method: 'get',
    url: 'https://api.api-ninjas.com/v1/animals?name=' + name,
    headers: { 'X-Api-Key': 'ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u'},
    contentType: 'application/json'
  })
    .then(function (response) {
      console.log(response.data);
    });
}

// Can you categorize the animalsArray into the following categories?

// Desired Output
// {
//     Mammals: [ 'Elephant' ],
//     Birds: [ 'Eagle' ],
//     Insects: [ 'Dragonfly' ]
// }

//

// After you get the design output create an API call to this API endpoint
// https://api.api-ninjas.com/v1/animals
// Or Visit this URL for more info: https://api-ninjas.com/api/animals
// API-Key to use: ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
