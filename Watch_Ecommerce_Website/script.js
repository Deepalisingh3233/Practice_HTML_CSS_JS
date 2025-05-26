const humburger = document.getElementById('humburger');
const navlinks = document.getElementById('navlinks');

humburger.addEventListener('click', () => {
    navlinks.classList.toggle("navlinks-active");
})