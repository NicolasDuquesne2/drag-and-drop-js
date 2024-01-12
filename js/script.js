let draggable = document.querySelector("#draggable")
let dropper = document.querySelector("#dropper")

dropper.addEventListener('dragover', (event) => {
    event.preventDefault()
})