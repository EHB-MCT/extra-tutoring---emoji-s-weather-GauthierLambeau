"use strict";

let emojis = [];


fetch("https://emoji-api.com/emojis?access_key=16e8c30978ce12574c04d5a5b8db1450774bf877")
.then(function (response) {
    return response.json();
    })
    .then(function(data) {
    console.log(data);
    console.log(data[5]);
    document.querySelector('h1').innerHTML = data[5].character;
    });
 

// TODO: fetch your data

// TODO: use then to wait for the result

// TODO: load the json from the reponse

// TODO: in the final then function, process the data and add it to the HTML