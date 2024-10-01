let popUp = document.getElementById("popup");
const submit = document.getElementById("submit");
const okBtn = document.getElementById("ok-btn");

submit.addEventListener('click',() => openPopup());
okBtn.addEventListener('click',() => closePopup());


function openPopup() { popUp.classList.add("open-popup"); }
function closePopup() { popUp.classList.remove("open-popup")}
 