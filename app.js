let hide = document.querySelector("#toggleList");

let listDiv = document.querySelector(".list");



let flag = true;

hide.addEventListener("click", (e) => {
//   if (flag == true) {
//     listDiv.style.display = "none";
//     hide.textContent = "Show list";
//     flag = false;
//   } else {
//     listDiv.style.display = "inherit";
//     hide.textContent = "Hide list";
//     flag = true;
//   }

     

listDiv.classList.toggle("hide");
  if (flag == true) {
    hide.textContent = "Show list";
    flag = false;
  } else {
    hide.textContent = "Hide list";
    flag = true;
  }

});


let description = document.querySelector(".description");

let newDescription = document.querySelector(".description-text");
let descriptionButton = document.querySelector(".description-button");

descriptionButton.addEventListener("click",()=>{

    description.textContent = newDescription.value;


    newDescription.value = "";

})

let addButton = document.querySelector(".addItemButton");
let addItemInput = document.querySelector(".addItemInput");
let items = document.querySelector("ul");

addButton.addEventListener("click", () => {
    let newItem = document.createElement("li");
    newItem.innerHTML = addItemInput.value + '<button class="up">Up</button><button class="down">Down</button><button class="remove">Remove</button>';

    items.appendChild(newItem);

    addItemInput.value = "";
});



