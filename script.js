let space = document.getElementById("Space")
window.addEventListener("keydown", logKeydown);
window.addEventListener("keyup", logKeyup);
function logKeydown(e) {
  let cilid = document.querySelector(`#${e.key}`);
  cilid.classList.toggle("add");

}
function logKeyup(e) {
  let cilid = document.querySelector(`#${e.key}`);
  cilid.classList.toggle("add");
}

