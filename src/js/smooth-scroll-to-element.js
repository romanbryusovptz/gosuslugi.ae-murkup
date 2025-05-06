export function initSmoothScrollToElement(element) {
  if (!element) return

  const bxPanel = document.querySelector('.bx-panel')
  const bxPanelCollapsed = document.querySelector('.bx-panel-collapsed')

  let tablet = window.matchMedia('(min-width: 611px) and (max-width: 768px)')
  let mobile = window.matchMedia('(min-width: 0) and (max-width: 610px)')
  let desktop = window.matchMedia('(min-width: 769px)')

  let topOffset = 0

  if (desktop.matches && bxPanel) {
    topOffset = 197
  } else if (desktop.matches && bxPanelCollapsed) {
    topOffset = 89
  } else if ((mobile.matches || tablet.matches) && bxPanelCollapsed) {
    topOffset = 147
  } else if ((mobile.matches || tablet.matches) && bxPanel) {
    topOffset = 39
  } else if ((mobile.matches || tablet.matches) && !bxPanel) {
    topOffset = 0
  } else topOffset = 50

  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition - topOffset

  window.scrollBy({
    top: offsetPosition
  })
}
