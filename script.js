window.addEventListener("keydown", logKeydown);
window.addEventListener("keyup", logKeyup);

function logKeydown(e) {
  let key = document.querySelector(`#${e.key}`);
    key.classList.toggle("add");

}


function logKeyup(e) {
  let element = document.querySelector(`#${e.key}`);
    key.classList.toggle("add");
}

