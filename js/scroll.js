function scrollTo(element) {
  window.scroll({
    left: 0, 
    top: element.offsetTop, 
    behavior: 'smooth'
  })
}

var button = document.querySelector('.nav-item1');
var footer = document.querySelector('#footer');

button.addEventListener('click', () => {
  scrollTo(footer);
})
