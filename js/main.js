const burgerBtn = document.querySelector('.nav-mobile__btn')
const navMobile = document.querySelector('.nav-mobile__items')
const navMobileItem = document.querySelectorAll('.nav-mobile__item')

const toggleNav = () => {
    navMobile.classList.toggle('nav-mobile__items--active')
    handleNavAnimation()
}

const closeNav = () => {
    navMobile.classList.remove('nav-mobile__items--active')
    navMobileItem.forEach(item => {
        item.classList.remove('nav-items-animation')
    })
}

const handleNavAnimation = () => {
    let delayTime = 0
    navMobileItem.forEach(item => {
        item.classList.toggle('nav-items-animation')
        delayTime += 2
        item.style.animationDelay = '.' + delayTime + 's'
    })
}

const mainFunction = () => {
    burgerBtn.addEventListener('click', toggleNav)
    navMobileItem.forEach(item => {item.addEventListener('click', closeNav)})
}

window.addEventListener('DOMContentLoaded', mainFunction)