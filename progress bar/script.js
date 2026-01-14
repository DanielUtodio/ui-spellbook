const bar = document.querySelector(".progress-bar")
const add = document.getElementById("add")
const sub = document.getElementById("sub")

bar.style.width = 0

add.addEventListener('click', () => {
    let width = parseInt(bar.style.width) || 0
    newWidth = width + 10
    if (newWidth > 100) return
    bar.style.width = `${newWidth}%` 
    console.log(newWidth, typeof newWidth)
})

sub.addEventListener('click', () => {
    let width = parseInt(bar.style.width) || 0
    newWidth = width - 10
    if(newWidth < 0) return
    bar.style.width = `${newWidth}%`
    console.log(newWidth, typeof newWidth)
})