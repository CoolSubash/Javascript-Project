let head = document.querySelectorAll('.top-head')
for (let i = 0; i < head.length; i++) {
  head[i].addEventListener('click', function () {
    let panel = this.nextElementSibling
    if (panel.style.display === 'block') {
      panel.style.display = 'none'
    } else {
      panel.style.display = 'block'
    }
  })
}
