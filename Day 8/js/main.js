const menuButton = document.querySelector(".site-header__toggle");
const navigation = document.querySelector(".site-header__nav");
menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", isOpen);
});