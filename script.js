// ==========================================================================
// 1. Konfigurasi Tema Tailwind CSS
// ==========================================================================
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#c0c1ff",
        "on-tertiary-fixed-variant": "#703700",
        "on-tertiary-container": "#452000",
        "on-tertiary-fixed": "#301400",
        "secondary-fixed-dim": "#4edea3",
        "surface-container-high": "#262a34",
        "surface-container-lowest": "#0a0e17",
        "surface-container-highest": "#31353f",
        "inverse-on-surface": "#2c303a",
        "tertiary-fixed-dim": "#ffb783",
        "on-error": "#690005",
        "on-primary-container": "#0d0096",
        "tertiary-container": "#d97721",
        "outline-variant": "#464554",
        "surface-container-low": "#181b25",
        error: "#ffb4ab",
        "on-error-container": "#ffdad6",
        "inverse-primary": "#494bd6",
        tertiary: "#ffb783",
        "on-primary-fixed": "#07006c",
        "on-surface-variant": "#c7c4d7",
        "on-primary-fixed-variant": "#2f2ebe",
        "on-secondary-fixed": "#002113",
        "primary-fixed": "#e1e0ff",
        "error-container": "#93000a",
        "on-secondary-fixed-variant": "#005236",
        "surface-dim": "#0f131c",
        "primary-fixed-dim": "#c0c1ff",
        "surface-bright": "#353943",
        "on-primary": "#1000a9",
        "inverse-surface": "#dfe2ef",
        "primary-container": "#8083ff",
        background: "#0f131c",
        "surface-container": "#1c1f29",
        "tertiary-fixed": "#ffdcc5",
        "on-surface": "#dfe2ef",
        "secondary-fixed": "#6ffbbe",
        "surface-variant": "#31353f",
        "on-secondary-container": "#00311f",
        "secondary-container": "#00a572",
        secondary: "#4edea3",
        outline: "#908fa0",
        surface: "#0f131c",
        "on-tertiary": "#4f2500",
        "on-background": "#dfe2ef",
        "on-secondary": "#003824",
        "surface-tint": "#c0c1ff",
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
      spacing: {
        "gutter-desktop": "1.5rem",
        "space-sm": "0.5rem",
        margin: "2rem",
        "margin-desktop": "4rem",
        "space-md": "1rem",
        "margin-mobile": "1.25rem",
        gutter: "1.5rem",
        "space-lg": "1.5rem",
        "gutter-mobile": "1rem",
        "space-xs": "0.25rem",
        "space-xl": "2.5rem",
      },
      fontFamily: {
        "headline-sm": ["Inter"],
        "headline-md": ["Inter"],
        "body-md": ["Inter"],
        display: ["Inter"],
        "headline-lg": ["Inter"],
        "headline-lg-mobile": ["Inter"],
        "display-mobile": ["Inter"],
        "label-code": ["JetBrains Mono"],
        "body-lg": ["Inter"],
        "label-pill": ["Inter"],
      },
      fontSize: {
        "headline-sm": [
          "18px",
          {
            lineHeight: "26px",
            letterSpacing: "-0.015em",
            fontWeight: "600",
          },
        ],
        "headline-md": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "body-md": [
          "14px",
          {
            lineHeight: "22px",
            letterSpacing: "-0.005em",
            fontWeight: "400",
          },
        ],
        display: [
          "64px",
          {
            lineHeight: "72px",
            letterSpacing: "-0.035em",
            fontWeight: "700",
          },
        ],
        "headline-lg": [
          "36px",
          {
            lineHeight: "44px",
            letterSpacing: "-0.025em",
            fontWeight: "600",
          },
        ],
        "headline-lg-mobile": [
          "28px",
          {
            lineHeight: "36px",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "display-mobile": [
          "40px",
          {
            lineHeight: "48px",
            letterSpacing: "-0.03em",
            fontWeight: "700",
          },
        ],
        "label-code": [
          "13px",
          { lineHeight: "18px", letterSpacing: "0em", fontWeight: "500" },
        ],
        "body-lg": [
          "16px",
          {
            lineHeight: "26px",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        "label-pill": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.02em",
            fontWeight: "500",
          },
        ],
      },
    },
  },
};

// ==========================================================================
// 2. Logika Interaktif (Navigasi, ScrollSpy, Copy Email, & Filter Proyek)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling untuk semua tautan hash dengan penyesuaian offset header
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#" || href.startsWith("javascript:")) return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });

        // Perbarui tampilan aktif pada navbar jika tautan di dalam navbar diklik
        if (this.classList.contains("nav-item")) {
          updateActiveNavbarLink(this);
        }
      }
    });
  });
});

function updateActiveNavbarLink(activeLink) {
  document.querySelectorAll("#navbar-links .nav-item").forEach((link) => {
    link.className =
      "nav-item px-space-md py-space-xs rounded-full font-label-pill text-label-pill text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer";
    link.removeAttribute("aria-current");
  });
  activeLink.className =
    "nav-item px-space-md py-space-xs transition-colors bg-primary text-on-primary font-label-pill text-label-pill rounded-full cursor-pointer";
  activeLink.setAttribute("aria-current", "page");
}

// ScrollSpy untuk menyorot tautan navigasi aktif sesuai section yang sedang tampil
window.addEventListener(
  "scroll",
  () => {
    const sections = [
      { id: "#about", nav: "about" },
      { id: "#stack", nav: "stack" },
      { id: "#selected-works", nav: "work" },
      { id: "#contact", nav: "contact" },
    ];

    const scrollPosition = window.scrollY + 180;
    let currentSectionNav = "";

    for (const sec of sections) {
      const el = document.querySelector(sec.id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSectionNav = sec.nav;
        }
      }
    }

    if (currentSectionNav) {
      const activeNavEl = document.querySelector(
        `#navbar-links a[data-path="${currentSectionNav}"]`,
      );
      if (activeNavEl && activeNavEl.getAttribute("aria-current") !== "page") {
        updateActiveNavbarLink(activeNavEl);
      }
    }
  },
  { passive: true },
);

function copyEmailAddress(buttonElement) {
  const email = "hello@alexvance.dev";
  const textSpan = buttonElement.querySelector("#email-text");
  const iconSpan = buttonElement.querySelector("#email-icon");
  const originalText = textSpan.innerText;

  const onSuccess = () => {
    textSpan.innerText = "Copied! ✓";
    if (iconSpan) iconSpan.innerText = "check";
    buttonElement.classList.add("bg-secondary", "text-on-secondary");
    buttonElement.classList.remove(
      "bg-primary-container",
      "text-on-primary-container",
    );

    setTimeout(() => {
      textSpan.innerText = originalText;
      if (iconSpan) iconSpan.innerText = "content_copy";
      buttonElement.classList.remove("bg-secondary", "text-on-secondary");
      buttonElement.classList.add(
        "bg-primary-container",
        "text-on-primary-container",
      );
    }, 2200);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(email)
      .then(onSuccess)
      .catch(() => {
        fallbackCopyText(email, onSuccess);
      });
  } else {
    fallbackCopyText(email, onSuccess);
  }
}

function fallbackCopyText(text, callback) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    if (callback) callback();
  } catch (err) {
    console.error("Fallback copy error:", err);
  }
  document.body.removeChild(textArea);
}

function downloadResume() {
  alert(
    "Resume PDF: Generating latest experience transcript for Alex Vance...",
  );
}

function filterProjects(category) {
  const buttons = ["all", "fullstack", "uiux", "systems"];
  buttons.forEach((id) => {
    const btn = document.getElementById("filter-" + id);
    if (btn) {
      if (id === category) {
        btn.className =
          "px-4 py-1.5 rounded-full font-label-pill text-label-pill bg-primary text-on-primary transition-all cursor-pointer";
      } else {
        btn.className =
          "px-4 py-1.5 rounded-full font-label-pill text-label-pill text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all cursor-pointer";
      }
    }
  });

  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    const categories = card.getAttribute("data-category");
    if (category === "all" || categories.includes(category)) {
      card.style.display = "block";
      card.style.opacity = "1";
    } else {
      card.style.display = "none";
    }
  });
}

