
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

let today = new Date();
document.querySelector("#currentyear").innerHTML = `&copy;${today.getFullYear()}`;
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;