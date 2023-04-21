document.addEventListener("DOMContentLoaded", () => {
  const navbarBtn = document.querySelector(".navbar__btn");

  const toggleNavbarList = () => {
    const navbarList = document.querySelector(".navbar__menu--list");
    navbarList.classList.toggle("navbar__menu--list-open");

    if (navbarList.classList.contains("navbar__menu--list-open")) {
      navbarBtn.textContent = "X";
    } else {
      navbarBtn.innerHTML = `<i class="fa-solid fa-bars" style="color: #ff7575"></i>`;
    }
  };

  navbarBtn.addEventListener("click", toggleNavbarList);
});
