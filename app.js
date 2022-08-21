const container = document.querySelector('.container'),
      allSlides = container.querySelectorAll('.slide')

allSlides.forEach(slide => {
  slide.addEventListener('click', (e) => {
    removePreviousActiveElement(allSlides)
    setActiveElement(e.target)
  })
})

function setActiveElement(element){
  element.classList.add('active')
}

function removePreviousActiveElement(listElements){
  listElements.forEach(element =>{
    element.classList.remove('active')
  })
}