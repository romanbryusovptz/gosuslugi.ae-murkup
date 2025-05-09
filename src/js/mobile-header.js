export function mobileHeader() {
    let burgerButton = document.querySelector('.js-burger');
    let header = document.querySelector('.js-header');
    if(burgerButton) {
        burgerButton.addEventListener('click', function() {
            this.classList.toggle('header-up__burger_active');
            if(header) {
                header.classList.toggle('header_opened');
            }
        });
    }
}