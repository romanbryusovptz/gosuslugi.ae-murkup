export function mobileHeader() {
    let burgerButton = document.querySelector('.js-burger');
    let header = document.querySelector('.js-header');
    let body = document.querySelector('body');
    let menuButtons = document.querySelectorAll('.js-mobile-menu');
    if(burgerButton) {
        burgerButton.addEventListener('click', function() {
            this.classList.toggle('header-up__burger_active');
            body.classList.toggle('menu-opened');
            if(header) {
                header.classList.toggle('header_opened');
            }
            if(menuButtons.length) {
                menuButtons.forEach((button) => {
                    let item  = button.closest('li');
                    if(item) {
                        item.classList.remove('opened');
                    }
                });
            }
        });
    }
    if(menuButtons.length) {
        if(menuButtons.length) {
            menuButtons.forEach((button) => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    let item = button.closest('li');
                    if(item) {
                        item.classList.toggle('opened');
                        if(!item.classList.contains('opened')) {
                            let subItemsOpened = item.querySelectorAll('.opened');
                            if(subItemsOpened.length) {
                                subItemsOpened.forEach((subItem) => {subItem.classList.remove('opened')});
                            }
                        }
                    }
                    button.closest('li')
                })
            });
        }
    }
}