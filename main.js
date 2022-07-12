const main = document.querySelector(".main");
main.style = `
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const label = document.createElement("label");
label.innerText = "Ingrese nombre";
main.appendChild(label);

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Ingrese nombre");
main.appendChild(input);

const p = document.createElement("p");
p.innerText = "No has ingresado ningun nombre";
main.appendChild(p);

let timeOut;

input.addEventListener("keyup", (e) => {
  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    p.innerText = `${e.target.value}`;
  }, 300);
});

const button = document.querySelector(".main__btn");
button.addEventListener("click", (e) => {
  p.classList.toggle("green");
});
