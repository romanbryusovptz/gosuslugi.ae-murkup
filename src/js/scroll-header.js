export function scrollHeader() {
    let tempScrollTop = 0;
    let currentScrollTop = window.scrollY;
    let header = document.querySelector('.js-header');
    let headerUp = document.querySelector('.js-header-up');
    let burgerButton = document.querySelector('.js-burger');
    if(header) {
        window.addEventListener('scroll', function() {
            currentScrollTop = window.scrollY;
            if (currentScrollTop > (headerUp?headerUp.offsetHeight:56)-1) {
                if( tempScrollTop < currentScrollTop ) {
                    header.classList.remove('header_scroll');
                    header.classList.add('header_hidden');
                    header.classList.remove('header_opened');
                    if(burgerButton) {
                        burgerButton.classList.remove('header-up__burger_active');
                    }
                }
                else if ( tempScrollTop > currentScrollTop ){
                    header.classList.add('header_scroll');
                    header.classList.remove('header_hidden');
                }
            }
            else
            {
               header.classList.remove('header_scroll','header_hidden')
            }
            tempScrollTop = currentScrollTop;
        });
    }
}