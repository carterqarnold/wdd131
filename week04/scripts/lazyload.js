let today = new Date();
document.querySelector("#currentyear").innerHTML = `&copy;${today.getFullYear()}`;
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
let namesB = array.filter(names => names.charAt(0) === "B");
let namesLength = array.map((names) => names.length);
console.log(names.reduce(((total, name) => total + name.length, 0)/ names.length));
