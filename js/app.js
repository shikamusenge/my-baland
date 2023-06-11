const MenuBtn = document.querySelector("#menu-btn");
const semBlue = document.querySelector("#links-container");
const closeMenuBtn = document.querySelector("#close-menu");
const lnks = document.querySelector(".link-div");

MenuBtn.addEventListener("click", () => {
  semBlue.className = "semi-blue";
  closeMenuBtn.style.display = "block";
  lnks.id = "showMenu";
  lnks.style.visibility = "visible";
});
closeMenuBtn.onclick = () => closeMenu();
lnks.querySelectorAll("a").forEach((l) => {
  l.onclick = () => closeMenu();
});
const closeMenu = () => {
  semBlue.classList.remove("semi-blue");
  closeMenuBtn.style.display = "none";
  lnks.id = "";
  lnks.style.visibility = "hidden";
};
