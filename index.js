"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

//purposely broken list
const brokenFunctionList = [
  { id: 11, name: "Tywin", age: 60 },
  { id: 12, name: "Jamie", age: 30 },
  { id: 13, name: "Jon", age: 19 },
  { id: 14, name: "Eddard", age: 45 },
  { id: 15, name: "Roose", age: 48 },
  { id: 16, name: "Daario", age: 33 },
  { id: 17, name: "Cersei", age: 30 },
  { id: 18, name: "Brienne", age: 32 },
  { id: 19, name: "Theon", age: 19 },
  { id: 20, name: "", age: 11 },
  { id: 21, name: "", age: 13 }
];
//age parameter for function 4
const ageCheck = 25;

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
function renderCharacterNames() {
  errorHandling(users, "error-messages");
  const nameList = document.getElementById("names-list");
  const len = users.length;
  nameList.innerHTML = "";

  for (let i = 0; i < len; i++) {
    const user = users[i];
    console.log(user.name);

    const li = document.createElement("li");
    li.textContent = user.name;

    nameList.appendChild(li);
  }
}
renderCharacterNames();
// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
function renderYoungerCharacters() {
  errorHandling(users, "error-messages");
  const nameList = document.getElementById("young-characters-list");
  const len = users.length;
  nameList.innerHTML = "";

  for (let i = 0; i < len; i++) {
    const user = users[i];
    if (user.age < 40) {
      console.log(user.name);
      const li = document.createElement("li");
      li.textContent = user.name;
      nameList.appendChild(li);
    }
  }
}
renderYoungerCharacters();
// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"


function renderCharacterList(array) {
  errorHandling(array, "broken-array-errors");
  const target = document.getElementById("function-list");
  target.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const character = array[i];
    const li = document.createElement("li");
    li.textContent = character.name;
    target.appendChild(li)
  };
}
// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"

function renderCharacterBySetAge(array, ageCheck) {
  errorHandling(array, "broken-array-errors");
  const target = document.getElementById("age-filter-list");
  target.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const character = array[i];
    if (character.age < ageCheck) {
      const li = document.createElement("li");
      li.textContent = character.name;
      target.appendChild(li);
    }
  }
}

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
function errorHandling(array, errorType) {
  const target = document.getElementById(errorType);
  if (!target) return;
  target.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const character = array[i];
    if (!character?.name || character.name.trim() == "") {
      const errorMessage = `Error, character at ${i} index does not have a valid name`;
      console.error(errorMessage);

      const error = document.createElement("div");
      error.textContent = errorMessage;
      target.appendChild(error);
    }
  }
}
// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors

//running new renderers with bad array
errorHandling(brokenFunctionList, "broken-array-errors");
renderCharacterList(brokenFunctionList);
renderCharacterBySetAge(brokenFunctionList, ageCheck);