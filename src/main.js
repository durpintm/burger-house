const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  });
});

// TABS
const tabs = document.querySelectorAll(".tabs_wrap ul li");

const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const snacks = document.querySelectorAll(".snack");
const beverages = document.querySelectorAll(".beverage");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");

    const tabVal = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.style.display = "none";
    });

    if (tabVal == "food") {
      foods.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabVal == "snack") {
      snacks.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabVal == "beverage") {
      beverages.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

const scrollup = () => {
  const scrollupBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollupBtn.classList.remove("-bottom-1/2");
    scrollupBtn.classList.add("bottom-4");
  } else {
    scrollupBtn.classList.add("-bottom-1/2");
    scrollupBtn.classList.remove("bottom-4");
  }
};
window.addEventListener("scroll", scrollup);

const scrollHeader = () => {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-secondaryColor");
  } else {
    header.classList.remove("border-b", "border-secondaryColor");
  }
};
window.addEventListener("scroll", scrollHeader);

const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}
