let tasks = document.querySelector(".tasks");
let inp = document.querySelector("#input");
let btn = document.querySelector("#btn");
btn.addEventListener("click", (event) => {
  addItem();
});
inp.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});
function addItem(value) {
  let inp = document.querySelector("#input");
  console.log(`completion of the task: ${inp.value}`);

  let item = document.createElement("div");
  item.className = "task-item";

  let text = document.createElement("div");
  text.className = "text";
  text.textContent = inp.value;

  let compl = document.createElement("div");

  compl.className = "compl";
  compl.addEventListener("click", (event) => {
    compl.classList.toggle("check");
    text.classList.toggle("crossOut");
  });

  let del = document.createElement("div");
  del.addEventListener("click", (event) => {
    item.remove();
  });
  del.className = "del";

  item.appendChild(compl);
  item.appendChild(text);
  item.appendChild(del);

  tasks.appendChild(item);
  inp.value = "";
}
