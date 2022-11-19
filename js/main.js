const burgerBtn = document.querySelector('.nav-mobile__btn')
const navMobile = document.querySelector('.nav-mobile__items')
const navMobileItem = document.querySelectorAll('.nav-mobile__item')
const header = document.querySelector('.header')
const headerTextH = document.querySelector('.header__text h3')
const headerTextA = document.querySelector('.header__text a')
const headerImg = document.querySelector('.header__img')
const headerIcon = document.querySelector('.header__icon')
const aboutMeBtn = document.querySelector('.header__text a')
const accordion = document.querySelector('.portfolio__accordions__item')
const accordionBtns = document.querySelectorAll('.portfolio__accordions__item__top__btn')
const accordionBtnArrows = document.querySelectorAll('.portfolio__accordions__item__top__btn .fa-arrow-alt-circle-down')
const allActiveItems = document.querySelectorAll('.portfolio__accordions__item__bottom')


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

const handleZoomInAnimation = () => {
    header.classList.add('zoomIn')
}

const fadeInAnimation = () => {
    headerTextA.classList.add('fadeIn')
    headerTextH.classList.add('fadeIn')
    headerIcon.classList.add('fadeIn')
}

const fadeInAnimation2 = () => {
    headerImg.classList.add('fadeIn2')
}

const btnAction = e => {
    const top = e.clientY - e.target.offsetTop
    const left = e.clientX - e.target.offsetLeft

    const boom = document.createElement('span')
    boom.classList.add('boom-btn')
    boom.style.top = top + 'px'
    boom.style.left = left + 'px'

    e.target.append(boom)
    console.log(top);
    console.log(left);

    setTimeout(() => {
        boom.remove()
    }, 300)
}

function openAccordion () {
    if (this.parentElement.nextElementSibling.classList.contains('accordion-active')) {
        this.parentElement.nextElementSibling.classList.remove('accordion-active')
        this.firstChild.style.transform = "rotate(0deg)";
    } else {
        closeAccordion()
        this.parentElement.nextElementSibling.classList.toggle('accordion-active')
        this.firstChild.style.transform = "rotate(180deg)";
    }
}

const closeAccordion = () => {
    allActiveItems.forEach(item => item.classList.remove('accordion-active'))
    accordionBtnArrows.forEach(arrow => arrow.style.transform = "rotate(0deg)")
}

const closeAccordionAround = (e) => {
    if (!e.target.classList.contains('dark') && !e.target.classList.contains('portfolio__accordions__item__top__btn')) {
        allActiveItems.forEach(item => item.classList.remove('accordion-active'))
        accordionBtnArrows.forEach(arrow => arrow.style.transform = "rotate(0deg)")
    }
}



const mainFunction = () => {
    burgerBtn.addEventListener('click', toggleNav)
    navMobileItem.forEach(item => {item.addEventListener('click', closeNav)})
    handleZoomInAnimation()
    fadeInAnimation()
    fadeInAnimation2()
    aboutMeBtn.addEventListener('click', btnAction)
    accordionBtns.forEach(btn => btn.addEventListener('click', openAccordion))
    window.addEventListener('click', closeAccordionAround)
}


window.addEventListener('DOMContentLoaded', mainFunction)