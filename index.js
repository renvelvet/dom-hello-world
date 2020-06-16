const newSpan = document.createElement("span");
const nama = document.createTextNode("Resha");
newSpan.appendChild(nama);

const oldSpan = document.querySelector("h1 span");
const h1 = document.getElementsByTagName("h1");
h1[0].replaceChild(newSpan, oldSpan);
