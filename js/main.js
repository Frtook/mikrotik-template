let btnPrice = document.querySelector("#price")
let data = new Date();
let arDate = new Intl.DateTimeFormat('ar',{weekday:'long',year:'numeric' ,month:'long',day:'numeric'}).format(data)

document.querySelector('.data').textContent = arDate

btnPrice.onclick = ()=> {
  location.href = '/pages/price.html'
}