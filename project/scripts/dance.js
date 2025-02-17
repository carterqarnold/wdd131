let today = new Date();
document.querySelector("#currentyear").innerHTML = `&copy;${today.getFullYear()}`;
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
})

const h2num1 = document.querySelector(".dancetype");
const h2num2 = document.querySelector(".difficultylevel");
const h2num3 = document.querySelector(".findinstructor");
  

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits == 0){
    h2num1.style.color = "darkblue";
    h2num2.style.color = "darkblue";
    h2num3.style.color = "darkblue";
}
else{
    h2num1.style.color = "blue";
    h2num2.style.color = "blue";
    h2num3.style.color = "blue";
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);