const searchIcon = document.getElementById('search')
const searchInput = document.getElementById('searchBox')
const nav = document.querySelector('nav')
const icons = document.querySelectorAll('.add');


searchIcon.addEventListener('click', function () {
    console.log('kkk');

    searchInput.classList.toggle('appear')
})
icons.forEach(e => {
    e.addEventListener('click', () => {
        const p = e.previousElementSibling.lastElementChild;
        const itemAdd = e.firstElementChild;
        const itemMins = e.lastElementChild;
        itemAdd.classList.toggle('hide')
        itemMins.classList.toggle('show');
        p.classList.toggle('show')
    })
})
AOS.init({
    duration: 1200,
    offset: 200,
    once: false,
    easing: 'ease-out'
});
function changeBg() {
    if (window.scrollY > 0) {
        nav.style.backgroundColor = '#1B1B1B'
    }
    else {
        nav.style.backgroundColor = 'transparent'
    }
}
window.addEventListener('scroll', changeBg)