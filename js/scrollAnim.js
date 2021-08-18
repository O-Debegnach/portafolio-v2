var leftSide = document.getElementById('contact-links');
var title = document.getElementById('title');


window.addEventListener('scroll', function(){
    leftSide.style.transform = ' rotate(-90deg) translateY(-100vh) translateY(' +(-this.window.pageYOffset) + 'px)' + 'translateX(' +(-this.window.pageYOffset) + 'px)'
});