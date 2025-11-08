function toggleTheme() {
  const body = document.body;
  const themeToggleButton = document.querySelector(".theme-toggle");
  if (!themeToggleButton) return;
  const currentIcon = themeToggleButton.querySelector("svg");

  const themes = {
    light: {
      themeClass: "light-theme",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>`,
    },
    dark: {
      themeClass: "dark-theme",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun-icon">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>`,
    },
  };

  if (!currentIcon) {
    const saved = (function () {
      try {
        return localStorage.getItem("theme");
      } catch (e) {
        return null;
      }
    })();
    let startDark = false;
    if (saved === "dark-theme") startDark = true;
    else if (saved === "light-theme") startDark = false;
    else
      startDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    themeToggleButton.innerHTML = startDark
      ? themes.dark.icon
      : themes.light.icon;
  }

  const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? themes.light : themes.dark;

  body.classList.remove("light-theme", "dark-theme");
  body.classList.add(newTheme.themeClass);

  const newIconEl = document.createElement("div");
  newIconEl.innerHTML = newTheme.icon;
  const old = themeToggleButton.querySelector("svg");
  if (old) old.remove();
  themeToggleButton.insertAdjacentHTML("afterbegin", newTheme.icon);

  try {
    localStorage.setItem("theme", newTheme.themeClass);
  } catch (e) {}
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = (function () {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  })();
  if (savedTheme === "dark-theme" || savedTheme === "light-theme") {
    document.body.classList.add(savedTheme);
  } else {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.classList.add(prefersDark ? "dark-theme" : "light-theme");
  }

  const themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn && !themeBtn.querySelector("svg")) {
    const isDark = document.body.classList.contains("dark-theme");
    themeBtn.insertAdjacentHTML(
      "afterbegin",
      isDark
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun-icon">
           <circle cx="12" cy="12" r="5"></circle>
           <line x1="12" y1="1" x2="12" y2="3"></line>
           <line x1="12" y1="21" x2="12" y2="23"></line>
         </svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon">
           <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
         </svg>`
    );
  }
});

function handleScroll() {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav__item");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (
      window.scrollY >= sectionTop - sectionHeight / 3 &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${currentSection}` && currentSection) {
      item.classList.add("active");
    }
  });
}
window.addEventListener("scroll", handleScroll);

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const myInfo = document.querySelector(".myinfo");
  const navLinks = document.querySelectorAll(".nav__item");

  if (!menuToggle || !myInfo) return;

  const svgs = {
    hamburger: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
    close: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  };

  function ensureSvgStrokes(btn) {
    if (!btn) return;
    const svg = btn.querySelector("svg");
    if (!svg) return;
    svg.setAttribute("stroke", svg.getAttribute("stroke") || "currentColor");
    Array.from(
      svg.querySelectorAll("line, path, circle, rect, polyline")
    ).forEach((el) => {
      if (!el.getAttribute("stroke")) el.setAttribute("stroke", "currentColor");
    });
  }

  if (!menuToggle.innerHTML.trim() || !menuToggle.innerHTML.includes("<svg")) {
    menuToggle.innerHTML = svgs.hamburger;
  }
  ensureSvgStrokes(menuToggle);
  if (!menuToggle.hasAttribute("aria-expanded"))
    menuToggle.setAttribute("aria-expanded", "false");

  function setMenu(open) {
    if (open) {
      myInfo.classList.add("open");
      menuToggle.innerHTML = svgs.close;
      menuToggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("no-scroll");
      ensureSvgStrokes(menuToggle);
    } else {
      myInfo.classList.remove("open");
      menuToggle.innerHTML = svgs.hamburger;
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
      ensureSvgStrokes(menuToggle);
    }
  }
  window.setMenu = setMenu;

  menuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    setMenu(!myInfo.classList.contains("open"));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href") || "";
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target)
          target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMenu(false);
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && myInfo.classList.contains("open"))
      setMenu(false);
  });

  const mo = new MutationObserver(() => {
    if (myInfo.classList.contains("open")) {
      menuToggle.innerHTML = svgs.close;
    } else {
      menuToggle.innerHTML = svgs.hamburger;
    }
    ensureSvgStrokes(menuToggle);
  });
  mo.observe(myInfo, { attributes: true, attributeFilter: ["class"] });
});
