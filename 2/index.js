const img = document.querySelectorAll('#controls img')
const controls = document.querySelector('#controls')
const audio = document.querySelector('audio')
const start = document.querySelector('#start button')
const startBox = document.querySelector('#start')
const progress = document.querySelector('.progress p')
const progressBox = document.querySelector('.progress')
const content = document.querySelector('.content')
const video = document.querySelector('video')

let status = false
let width = 10

const handle = (e) => {
    status = !status
    if (status) { // 暂停
        img[0].style.display = 'none'
        img[1].style.display = 'block'
        audio.pause()
        controls.classList.add('jello')
    } else {
        img[0].style.display = 'block'
        img[1].style.display = 'none'
        audio.play()
        controls.classList.add('heartBeat')
    }
}

const sleep = (ms) => new Promise((r, j) => {
    setTimeout(r, ms)
})

const check = () => {
    return new Promise(async (resolve, reject) => {
        let read = true
        while(read) {
            await sleep(600)
            const d = Math.random()
            if (d > 0.92 || width >= 100) {
                read = false

                progress.style.width = '100%'

                await sleep(500)
            } else {
                progress.style.width = (width+=Math.random() * 10 | 0 + 1) + '%'
            }
        }
        resolve()
    })
}

content.addEventListener('scroll', e => {
    video.play()
    video.muted = true
})

start.addEventListener('touchend', async e => {

    progressBox.style.display = 'block'
    start.classList.remove('jackInTheBox')
    start.classList.add('bounceOut')

    audio.play()
    
    await check()

    startBox.classList.add('fadeOutUp')

})

controls.addEventListener('touchend', handle)

controls.addEventListener('animationend', e => {
    controls.classList.remove('jello')
    controls.classList.remove('heartBeat')
})

document.addEventListener('DOMContentLoaded', e => {
    
})
