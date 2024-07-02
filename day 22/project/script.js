const noteContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelector(".input-box");

function showNote() {
  noteContainer.innerHTML = localStorage.getItem("notes");
}
showNote();
function updateNotes() {
  localStorage.setItem("notes", noteContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let notes = document.createElement("p");
  let img = document.createElement("img");

  notes.className = "input-box";
  notes.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  noteContainer.appendChild(notes).appendChild(img);
});

noteContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateNotes();
  } else if (e.target.tagName === "P") {
    let notes = document.querySelectorAll(".input-box");
    notes.forEach((element) => {
      element.onkeyup = function () {
        updateNotes();
      };
    });
  }
});
