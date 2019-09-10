//  set active nav on scroll
let mainNavLinks = document.querySelectorAll('.navbar ul li a')

window.addEventListener('scroll', event => {
  let fromTop = window.scrollY

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash)
    let sectionOffsetTop = section.offsetTop - 40
    if (
      sectionOffsetTop <= fromTop &&
      sectionOffsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
})

// use intersection observer to detect elements in the viewport.
const setVisibleCallback = entries => {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      console.log('Adding is-visible to ', entry.target)
      entry.target.classList.add('is-visible')
    } else {
      console.log('Removing is-visible from ', entry.target)
      entry.target.classList.remove('is-visible')
    }
  })
}

let options = {
  root: null,
  threshold: 0.5
}

const observer = new IntersectionObserver(setVisibleCallback, options)

const targets = document.querySelectorAll('.show-on-scroll')
targets.forEach(function (target) {
  observer.observe(target)
})