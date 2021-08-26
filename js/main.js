var nav = document.querySelector('nav');
var logotipo = document.querySelector('a .navbar-brand');


window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100){
        nav.classList.add('navbar-dark','bg-dark','shadow');
        logotipo.classList.add('logotipo');
        
       }else{
        nav.classList.remove('navbar-dark','bg-dark','shadow');
        logotipo.classList.remove('logotipo');
    }
});


const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
