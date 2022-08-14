// SCROLL DA PÁGINA

const menuItems = document.querySelectorAll('.menuNav a[href^="#"]')

menuItems.forEach(item => {
  console.log('clicou')
  item.addEventListener('click', scrolToIdOnclick)
})

function scrolToIdOnclick(event){
  event.preventDefault()
  const to = getScrollTopByHref(event.target)
  scrollToPosition(to)
}

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

  document.body.style.overflow = show ? "hidden" : "initial"

  menuSection.classList.toggle('on', show)
  show = !show
})