const timeContent = document.querySelector("#insertTime");
const dateContent = document.querySelector("#insertDate");
const flyNumber = document.querySelector("#flightNumber");
const terminalNumber = document.querySelector("#terminalNumber");

function updateTime() {
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();

  timeContent.textContent = time;
  dateContent.textContent = date;
}

setInterval(() => {
  updateTime();
}, 1000);

const numeroVuelo = Math.ceil(Math.random() * 10000); // 0.0001 -> 9999.000001 -> 100000
const numeroTerminal = Math.ceil(Math.random() * 20); // 0.000001 -> 1 || 19.9545943 -> 20

flyNumber.textContent = numeroVuelo;
terminalNumber.textContent = numeroTerminal;

const myModal = document.getElementById("myModal");

myModal.classList.add("d-block");

const buttonClose = document.querySelector("#myModal .btn-close")

buttonClose.addEventListener("click", () => {
    myModal.classList.remove("d-block");
})


