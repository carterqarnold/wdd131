const submitButton = document.querySelector("button");
const typeElement = document.querySelector("input");
const list = document.querySelector("#list");
        
const liElement = document.createElement("li");
const deleteButton = document.createElement("button");
submitButton.addEventListener(click, function() {

    if (typeElement.value.trim() !== "")
    {
        liElement.textContent = typeElement.value;
        deleteButton.textContent = "❌";
        
        liElement.append(deleteButton);
        list.append(liElement);
    }
    
    deleteButton.addEventListener(click,function()
    {
        list.removeChild(liElement);
        typeElement.focus();
    });
    typeElement.value = "";
    typeElement.focus();
});
