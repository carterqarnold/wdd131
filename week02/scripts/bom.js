const submitButton = document.querySelector("button");
const typeElement = document.querySelector("input");
const list = document.querySelector("list");

const liElement = document.createElement("li");
const deleteButton = document.createElement("button");
liElement.textContent = typeElement.value;

deleteButton.textContent = "❌";
liElement.append(deleteButton);
list.append(liElement);
