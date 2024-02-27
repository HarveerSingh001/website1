loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

load = 0
loadText.innerText = `${load}%`
loadText.style.opacity = 0.5
bg.style.filter = "blur(10px)"

function blurring(){
    load = load + 1
    
}


