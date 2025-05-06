import { initSmoothScroll } from './js/smooth-scroll'
import { initSmoothScrollToElement } from './js/smooth-scroll-to-element'

import './scss/app.scss'

window.initSmoothScrollToElement = initSmoothScrollToElement
window.initSmoothScroll = initSmoothScroll
window.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll()
})