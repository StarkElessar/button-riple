'use strict'

document.addEventListener('click', ({ target, pageX, pageY }) => {
  if (target.closest('[data-ripple]')) {
    const button = target.closest('[data-ripple]')
    const ripple = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    ripple.style.width = ripple.style.height = `${diameter}px`
    ripple.style.left = `${pageX - (button.getBoundingClientRect().left + scrollX) - radius}px`
    ripple.style.top = `${pageY - (button.getBoundingClientRect().top + scrollY) - radius}px`
    ripple.classList.add('button__ripple')

    button.append(ripple)

    // Определяю время анианананимаци 
    const timeOut = getAnimationDuration(ripple)

    // Удаление элемента после его анимации
    setTimeout(() => ripple ? ripple.remove() : null, timeOut)

    function getAnimationDuration(element) {
      const animationDuration = window.getComputedStyle(element).animationDuration
      return animationDuration.replace('s', '') * 1000
    }
  }
})