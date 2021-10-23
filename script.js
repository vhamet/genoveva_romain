let current = 1

const handleClick = e => {
  const id = e.target.id
  const index = id[5]

  document.querySelector(`#link-${current}`).classList.remove("current")

  const currentSpeech = document.querySelector(`#speech-${current}`)
  currentSpeech.classList.remove("current")

  document.querySelector(`#link-${index}`).classList.add("current")
  setTimeout(() => {
    currentSpeech.classList.add("hidden")
    const newSpeech = document.querySelector(`#speech-${index}`)
    newSpeech.classList.remove("hidden")
    newSpeech.classList.add("current")
    current = index
  }, 500)
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.getElementsByClassName("link")
  for (const link of links)
    link.addEventListener("click", handleClick)
  
})