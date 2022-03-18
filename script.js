const win = document.getElementById("win")
const button = document.getElementById("button")

let won = false

button.addEventListener("click", toggleWin, false)

function toggleWin() {
  won = !won

  if (won) {
    win.classList.remove("hide")
    button.textContent = "Play again"
  } else {
    win.classList.add("hide")
    button.textContent = "Click to win"
  }
}