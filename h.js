var css=document.querySelector("h3")
var color1=document.querySelector(".color1")
var color2=document.querySelector(".color2")
var body=document.getElementById('game')
function setgr(){
  body.style="background-image:linear-gradient(to right, "+color1.value+", "+color2.value+")"
  css.textContent=body.style.background
}

color1.addEventListener("input",setgr)
color2.addEventListener("input",setgr)
