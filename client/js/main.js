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

// const menuBtnSidebar = document.getElementById("menu-btn-sidebar");
// const Sidebar = document.getElementById("sidebar");
// menuBtnSidebar.addEventListener("click", () => {
//   Sidebar.classList.remove("hidden");
//   Sidebar.classList.add("flex");
//   menuBtnSidebar.classList.add("hidden");
// });

// const closeSidebar = document.getElementById("close-sidebar");
// closeSidebar.addEventListener("click", () => {
//   Sidebar.classList.remove("flex");
//   Sidebar.classList.add("hidden");
//   menuBtnSidebar.classList.remove("hidden");
//   menuBtnSidebar.classList.add("flex");
// });

const sidebar = document.getElementById("sidebar");
const menuBtnSidebar = document.getElementById("menu-btn-sidebar");
const closeSidebar = document.getElementById("close-sidebar");

// فتح السايدبار
menuBtnSidebar.addEventListener("click", () => {
  sidebar.classList.add("sidebar-active");
});

// إغلاق السايدبار عند الضغط على زر الإغلاق
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-active");
});

// إغلاق السايدبار عند الضغط خارج السايدبار (optional)
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !menuBtnSidebar.contains(e.target)) {
    sidebar.classList.remove("sidebar-active");
  }
});
// Modal elements
const modal = document.getElementById("loginModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

// open modal
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// close button
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
const loginBtn = document.getElementById("loginBtn");
const inputs = document.querySelectorAll("#loginForm input");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const allFilled = Array.from(inputs).every((i) => i.value.trim() !== "");
    if (allFilled) {
      loginBtn.disabled = false;
      loginBtn.classList.remove(
        "bg-gray-200",
        "text-gray-500",
        "cursor-not-allowed"
      );
      loginBtn.classList.add("bg-blue-600", "text-white", "hover:bg-blue-700");
    } else {
      loginBtn.disabled = true;
      loginBtn.classList.add(
        "bg-gray-200",
        "text-gray-500",
        "cursor-not-allowed"
      );
      loginBtn.classList.remove(
        "bg-blue-600",
        "text-white",
        "hover:bg-blue-700"
      );
    }
  });
});
loginBtn.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
  loginBtn.disabled = true;
  loginBtn.classList.add("bg-gray-200", "text-gray-500", "cursor-not-allowed");
  loginBtn.classList.remove("bg-blue-600", "text-white", "hover:bg-blue-700");
});

const signupNavigator = document.getElementById("signupNavigator");
const loginNavigator = document.getElementById("loginNavigator");
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
signupNavigator.addEventListener("click", () => {
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
  signupForm.classList.add("flex");
});
loginNavigator.addEventListener("click", () => {
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
  loginForm.classList.add("flex");
  signupForm.classList.remove("flex");
});

const signupInputs = document.querySelectorAll("#signupForm input");
const signupBtn = document.getElementById("signupBtn");

signupInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const isFilledInputs = Array.from(signupInputs).every(
      (i) => i.value.trim() !== ""
    );
    if (isFilledInputs) {
      signupBtn.disabled = false;
      signupBtn.classList.remove(
        "bg-gray-200",
        "text-gray-500",
        "cursor-not-allowed"
      );

      signupBtn.classList.add("bg-blue-600", "text-white", "hover:bg-blue-700");
    } else {
      signupBtn.disabled = true;
      signupBtn.classList.add(
        "bg-gray-200",
        "text-gray-500",
        "cursor-not-allowed"
      );
      signupBtn.classList.remove(
        "bg-blue-600",
        "text-white",
        "hover:bg-blue-700"
      );
    }
  });
});
