const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
let pontos = document.getElementsByTagName('pontuacao')
   
const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {

        mario.classList.remove('jump')

    }, 500)

}

// .forEach talvez usar

const defeat = setInterval(() => { 

    const pipePosition = pipe.offsetLeft 
    const cloudsPosition = clouds.offsetLeft
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '')
    
    if (pipePosition <= 70 && pipePosition > 0 && marioPosition <80) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        mario.src = './image/marioDerrota.png'
        mario.style.width = '55px'
        mario.style.marginLeft = '21px'

        clearInterval(defeat)
          
    }

}, 10)

document.addEventListener('keydown', jump)