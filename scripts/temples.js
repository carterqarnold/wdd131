
const hamButton = document.querySelector("button");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamButton.classList.toggle("show");
});

const year = document.querySelector("#currentyear");
const today = new Date();
const lastModifiedDate = new Date(document.lastModified);

const formattedDate = lastModifiedDate.toLocaleString();

year.innerHTML = `<span>${today.getFullYear()}</span>`;
const elementToUpdate = document.getElementById("lastModified");
elementToUpdate.innerHTML = `Last Modification: ${formattedDate}`;
