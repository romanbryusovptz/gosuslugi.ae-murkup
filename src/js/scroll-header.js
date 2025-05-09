export function scrollHeader() {
    let tempScrollTop = 0;
    let currentScrollTop = window.scrollY;
    let header = document.querySelector('.header');
    let headerUp = document.querySelector('.header-up');
    if(header) {
        window.addEventListener('scroll', function() {
            let currentScrollTop = window.scrollY;
            console.log(currentScrollTop);
            console.log(tempScrollTop);
            if (currentScrollTop > (headerUp?headerUp.offsetHeight:56)-1) {
                if( tempScrollTop < currentScrollTop ) {
                    header.classList.remove('header_scroll');
                    header.classList.add('header_hidden');
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