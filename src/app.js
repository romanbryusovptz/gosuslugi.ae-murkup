import { initSmoothScroll } from './js/smooth-scroll'
import { initSmoothScrollToElement } from './js/smooth-scroll-to-element'
import {scrollHeader} from "./js/scroll-header.js";

import './scss/app.scss'


window.initSmoothScrollToElement = initSmoothScrollToElement
window.initSmoothScroll = initSmoothScroll
window.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    scrollHeader();
})