let table = document.querySelector(".table");
let btnHome = document.querySelector(".home");
btnHome.onclick = () => {
  location.pathname = "index.html";
};

createTable();
function createTable() {
  fetch("../data/price.json")
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
