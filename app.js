document.addEventListener("DOMContentLoaded", () => {
  const navbarBtn = document.querySelector(".navbar__btn");

  const toggleNavbarList = () => {
    const navbarList = document.querySelector(".navbar__menu--list");
    navbarList.classList.toggle("navbar__menu--list-open");
  };

  navbarBtn.addEventListener("click", toggleNavbarList);
});
