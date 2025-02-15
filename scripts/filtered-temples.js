let today = new Date();
document.querySelector("#currentyear").innerHTML = `&copy;${today.getFullYear()}`;
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
})

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Dallas Texas Temple",
        location: "Dallas Texas, United States",
        dedicated: "1984, October, 19",
        area: 44207,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-51578-thumb.jpg"
    },
    {
        templeName: "Concepción Chile Temple",
        location: "Concepción Chile",
        dedicated: "2018, October, 28",
        area: 23095,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-35983-thumb.jpg"
    },
    {
        templeName: "Paris France Temple",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2054-thumb.jpg"
    }
    // Add more temple objects here...
  ];

const main = document.querySelector(".temple_imgs");
const title = document.querySelector("#title");

function displayTemple(temples){
    temples.forEach((one)=> {
        const templeFigure = document.createElement("figure");

        const templeH2 = document.createElement("h2");
        const templeInfo = document.createElement("div");
        const templeImg = document.createElement("img");

        templeH2.textContent = one.templeName;
        templeInfo.innerHTML += `<p>Location: ${one.location}</p>`
        templeInfo.innerHTML += `<p>Dedication: ${one.dedicated}</p>`
        templeInfo.innerHTML += `<p>Size: ${one.area} sqft</p>`;

        templeImg.setAttribute("src", one.imageUrl);
        templeImg.setAttribute("alt", one.templeName);
        templeImg.setAttribute("loading", "lazy");

        templeFigure.append(templeH2, templeInfo, templeImg);
        main.appendChild(templeFigure);
    })
}

function clearMain(){
    main.innerHTML = "";
}

document.querySelector("#old").addEventListener("click", (a) => {
    const filteredTemples = temples.filter((one) => new Date(one.dedicated).getFullYear() < 1900);
    clearMain();

    title.innerHTML = a.target.textContent;
    displayTemple(filteredTemples);
})

document.querySelector("#new").addEventListener("click", (a) => {
    const filteredTemples = temples.filter((one) => new Date(one.dedicated).getFullYear() > 2000);
    clearMain();

    title.innerHTML = a.target.textContent;
    displayTemple(filteredTemples);
})

document.querySelector("#large").addEventListener("click", (a) => {
    const filteredTemples = temples.filter((one) => one.area > 90000);
    clearMain();

    title.innerHTML = a.target.textContent;
    displayTemple(filteredTemples);
})

document.querySelector("#small").addEventListener("click", (a) => {
    const filteredTemples = temples.filter((one) => one.area < 10000);
    clearMain();

    title.innerHTML = a.target.textContent;
    displayTemple(filteredTemples);
})

document.querySelector("#home").addEventListener("click", (a) => {
    clearMain();
    title.innerHTML = a.target.textContent;
    displayTemple(temples);
})
displayTemple(temples);