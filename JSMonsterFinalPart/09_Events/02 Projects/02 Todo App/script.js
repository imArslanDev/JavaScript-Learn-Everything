let listContainer = document.querySelector(".listContainer");
let inputBox = document.querySelector(".inpBox");
let addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", () => {
  let listItem = document.createElement("div");
  let editButton = document.createElement("button").classList.add("edit");
  let delButton = document.createElement("button").classList.add("delete");
  listItem.appendChild(editButton);
  listItem.appendChild(delButton);
  listItem.classList.add("listItem");
  listItem.innerHTML = inputBox.value;
  listContainer.appendChild(listItem);
  console.log(listItem);
});

listContainer.addEventListener("click", (e) => {
  e.target.classList.toggle("markedAsDone");
});
