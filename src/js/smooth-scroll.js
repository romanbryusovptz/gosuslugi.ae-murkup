import { initSmoothScrollToElement } from './smooth-scroll-to-element'

export function initSmoothScroll() {
  const anchors = document.querySelectorAll('a[href*="#"]')
  const hash = window.location.hash

  if (!anchors.length) return

  let elementHash = null
  let section = null

  anchors.forEach((anchor) => {
    anchor.addEventListener('click', function () {
      const skip = anchor.getAttribute('data-skip-hash')

      if (skip) return

      if (hash) elementHash = document.querySelector(hash)

      const sectionId = anchor.getAttribute('href').substring(1)

      section =
        elementHash && anchor.getAttribute('href') === elementHash
          ? elementHash
          : document.getElementById(sectionId)

      initSmoothScrollToElement(section)

      // if (section) {
      //     e.preventDefault();
      //     const y = section.getBoundingClientRect().top + window.scrollY;

      //     window.scrollTo({top: y, behavior: 'smooth'});
      // }
    })
  })
}
