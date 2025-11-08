const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("hidden");
});
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.add("hidden");
  }
});
menu.addEventListener("click", (e) => {
  e.stopPropagation();
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

const menuBtnSidebar = document.getElementById("menu-btn-sidebar");
const Sidebar = document.getElementById("sidebar");
menuBtnSidebar.addEventListener("click", () => {
  Sidebar.classList.remove("hidden");
  Sidebar.classList.add("flex");
  menuBtnSidebar.classList.add("hidden");
});

const closeSidebar = document.getElementById("close-sidebar");
closeSidebar.addEventListener("click", () => {
  Sidebar.classList.remove("flex");
  Sidebar.classList.add("hidden");
  menuBtnSidebar.classList.remove("hidden");
  menuBtnSidebar.classList.add("flex");
});

const slider = document.getElementById("slider");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// تمرير يمين ويسار عند الضغط على الأزرار
next.onclick = () => (slider.scrollLeft += slider.clientWidth * 0.85);
prev.onclick = () => (slider.scrollLeft -= slider.clientWidth * 0.85);
