// SCROLL DA PÁGINA

const menuItems = document.querySelectorAll('.menuNav a[href^="#"]')

menuItems.forEach(item => {
  item.addEventListener('click', scrolToIdOnclick)
})

function scrolToIdOnclick(event){
  event.preventDefault()
  const to = getScrollTopByHref(event.target)
  scrollToPosition(to)
}1

function scrollToPosition(to){
  window.scroll({
    top: to ,
    behavior:"smooth",
  })
}

function getScrollTopByHref(element){
  const id = element.getAttribute('href')
  return document.querySelector(id).offsetTop
}

// MENU RESPONSIVO

let show = true

const menuSection = document.querySelector('.menu-section')
const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener('click',()=>{
  // document.body.style.overflow = show ? "hidden" : "initial" 

  menuSection.classList.toggle('on', show)
  show = !show
  
})

// TITLE ANIMATION 

var typed = new Typed(".typing",{
    strings: ["Desenvolvedor", "Freelancer", "Designer", "Programador"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
