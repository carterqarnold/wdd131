let today = new Date();
document.querySelector("#currentyear").innerHTML = `&copy;${today.getFullYear()}`;
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
})

const linksWImgs = [
    {
        link: "https://www.youtube.com/c/socialdanceonline",
        danceLinkName: "Social Dance Youtube Channel",
        linkNumber: "1",
        imageUrl:
        "https://socialdanceonline.com/wp-content/uploads/Social-Dance-Online-Lessons.png"
    },
    {
        link: "https://wikihow.com/Ballroom-Dance",
        danceLinkName: "Wikihow Ballroom Dance",
        linkNumber: "2",
        imageUrl:
        "https://static.vecteezy.com/system/resources/previews/045/915/188/non_2x/silhouette-of-a-ballroom-couple-dancing-free-vector.jpg"
    },
    {
        link: "https://jtdancestudio.com/how-to-ballroom-guide-to-learn-ballroom-dance/",
        danceLinkName: "Dance Sudio",
        linkNumber: "4",
        imageUrl:
        "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=360"
    }
  ];

const main = document.querySelector(".links");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


function displayLinkWImg(linksWImgs){
    

    

    linksWImgs.forEach((one)=> {
        const danceFigure = document.createElement("figure");
        
        const danceImg = document.createElement("img");
        const danceLink = document.createElement("li");
        const danceatag = document.createElement("a")

        danceImg.setAttribute("src", one.imageUrl);
        danceImg.setAttribute("class", "onlineimgs");
        danceImg.setAttribute("alt", one.danceLinkName);
        danceImg.setAttribute("loading", "lazy");

        danceatag.setAttribute("href", one.link);
        danceatag.textContent = `${one.danceLinkName}`
        danceatag.style.color = "rgb(204, 6, 22)"

        danceLink.setAttribute("class", "dancelinks")

        danceLink.appendChild(danceatag)
        danceFigure.append(danceLink, danceImg);
        main.appendChild(danceFigure);
    })
}

function clearMain(){
    main.innerHTML = "";
}

document.querySelector("#onlineresources").addEventListener("click", (a) => {
    const h2 = danceH2;    
    const linkfigure1 = linksWImgs.filter((one) => (one.linkNumber) > 2);    
    const linkfigure2 = linksWImgs.filter((one) => (one.linkNumber) < 3);

    if (numVisits > 5){
        clearMain();
        displayLinkWImg(h2);
        displayLinkWImg(linkfigure1);
        displayLinkWImg(linkfigure2);
    }
    else{
        clearMain();
        displayLinkWImg(h2);
        displayLinkWImg(linkfigure2);
        displayLinkWImg(linkfigure1);
    }
    })

displayLinkWImg(linksWImgs);