function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.navbar_menu');
    const mobileToggle = document.querySelector('#mobile-menu');

    mobileMenu.classList.toggle('active');
    mobileToggle.classList.toggle('is-active');
}

document.addEventListener('DOMContentLoaded', function () {
    const mobileToggle = document.querySelector('#mobile-menu');
    mobileToggle.addEventListener('click', function () {
        toggleMobileMenu();
    });
});
