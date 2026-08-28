/* Small, dependency-free behaviours: abstract folds, mobile nav, sticky rule. */
(function () {
  "use strict";

  /* --- Abstract folds ---------------------------------------------------
     The panel is `hidden` while closed so screen readers and Ctrl+F skip it.
     Opening un-hides first, then flips the class on the next frame so the
     grid-template-rows transition has two states to animate between.        */
  document.querySelectorAll("[data-abstract-toggle]").forEach(function (btn) {
    var panel = document.getElementById(btn.getAttribute("aria-controls"));
    if (!panel) return;

    var label = btn.querySelector("[data-abstract-label]");

    var close = function () {
      btn.setAttribute("aria-expanded", "false");
      panel.classList.remove("is-open");
      if (label) label.textContent = "Abstract";

      var settle = function () {
        if (btn.getAttribute("aria-expanded") === "false") panel.hidden = true;
      };
      panel.addEventListener("transitionend", settle, { once: true });
      window.setTimeout(settle, 450);
    };

    var open = function () {
      panel.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      if (label) label.textContent = "Hide abstract";

      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          panel.classList.add("is-open");
        });
      });
    };

    btn.addEventListener("click", function () {
      if (btn.getAttribute("aria-expanded") === "true") close();
      else open();
    });
  });

  /* --- Mobile navigation ------------------------------------------------ */
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });
  }

  /* --- Hairline under the masthead once the page scrolls ---------------- */
  var masthead = document.querySelector("[data-masthead]");
  if (masthead) {
    var sync = function () {
      masthead.classList.toggle("is-stuck", window.scrollY > 8);
    };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
  }
})();
