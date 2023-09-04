const btnOpen = document.querySelector('.btn__open')

const popup = document.querySelector('.pop__up')

const body = document.body

const popOpen = () => {
  popup.classList.add('pop__up--show')
  body.classList.add('body--pop')
}

const popClose = () => {
  popup.classList.remove('pop__up--show')
  body.classList.remove('body--pop')
}

btnOpen.addEventListener('click', () => popOpen())

popup.addEventListener('click', (event) => {
  target = event.target
  if (target && target.classList.contains('pop__up') || target.classList.contains('pop__up-close')) {
    popClose()
  }
})

document.addEventListener('keydown', (event) => {
  if (event.code === "Escape") {
    popClose()
  }
})