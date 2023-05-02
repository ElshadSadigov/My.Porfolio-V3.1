// Loading Part
const container = document.querySelector('.container')
const loding = document.querySelector('.loading')

setTimeout(function () {
    container.style.display = 'block'
    loding.style.display = 'none'
}, 2700)
// Loading Part


// Header Part
const header = document.querySelector('.header')
const resBtns = document.querySelector('.res-btns')
const headerA = document.querySelectorAll('.header-a')
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (!header.classList.contains('active')) {
        if (scrollTop > lastScrollTop) {
            header.style.top = '-70px'
        } else {
            header.style.top = '0'
        }
        lastScrollTop = scrollTop;
    }
})

resBtns.addEventListener('click', () => {
    header.classList.toggle('active')
})

headerA.forEach(el => {
    el.addEventListener('click', () => {
        header.classList.toggle('active')
    })
})
// Header Part


// Contact Part
const contactBtn = document.querySelector('.contact-btn')
const contactMethod = document.querySelector('.contactMethod')
const exitIcon = document.querySelector('.exitIcon')

contactBtn.addEventListener('click', () => {
    contactMethod.style.display = 'flex';
})
exitIcon.addEventListener('click', () => {
    contactMethod.style.display = 'none'
})
// Contact Part



// Whatsapp Mesaj Part
function sendMessage() {
    var phoneNumber = 506609694;
    var message = "Hello";
    var url = "https://wa.me/" + phoneNumber + "/?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
}
// Whatsapp Mesaj Part
