// const pageBanner = document.getElementById("page-banner");

// const titles = document.getElementsByClassName("title");

// const page = document.querySelectorAll("li .name")[2];

// const ul = document.querySelector("li");

// const page = ul.firstElementChild.textContent;
// const page = ul.lastElementChild.textContent;

// const list = document.querySelector("ul");
// const li = document.querySelector("li");

// const page = list.children[2].children[0].textContent;

// const page = li.parentElement.parentElement.parentElement;

const heading = document.createElement("h1");
// heading.innerHTML = `
//     <p> this is paragraph

//     <li> item one  </li>

//     </p>
//     <h3> this is heading 3 </h3>

// `;

const p = heading.appendChild(document.createElement("p"));

p.innerHTML = "paragraph";

console.log(heading);
