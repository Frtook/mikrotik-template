let btnPrice = document.querySelector("#price");
let btnMain = document.querySelector("#main");
let table = document.querySelector(".table");
let form = document.querySelector("form");
let price = document.querySelector(".price");
// var
let data = new Date();
let arDate = new Intl.DateTimeFormat("ar", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(data);

document.querySelector(".data").textContent = arDate;

btnMain.onclick = () => {
  btnMain.classList.add("active");
  btnPrice.classList.remove("active");
  form.style.display = "flex";
  price.style.display = "none";
};
btnPrice.onclick = () => {
  btnPrice.classList.add("active");
  btnMain.classList.remove("active");
  price.style.display = "block";
  form.style.display = "none";
};

function createTable() {
  fetch("https://frtook.github.io/Net/data/price.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((e) => {
        let { num, time, cost, size } = e;
        let template = `
        <div>
          <span>${num}</span>
          <span>${time}</span>
          <span>${cost}</span>
          <span>${size}</span>
        </div>
        `;
        table.insertAdjacentHTML("beforeend", template);
      });
    });
}
createTable();
