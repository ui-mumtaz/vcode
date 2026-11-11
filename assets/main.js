(function () {
  "use strict";
  var P = window.PROFILE;
  if (!P) return;
  document.documentElement.classList.add("js");

  var $ = function (sel) { return document.querySelector(sel); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var L = P.links || {};

  /* ── Icons ── */
  var ICON = {
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4 1.4-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
    globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  };

  function ext(href) { return /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : ""; }
  function btn(href, label, icon, primary) {
    return '<a class="btn' + (primary ? " btn-primary" : "") + '" href="' + esc(href) + '"' + ext(href) + ">" + (ICON[icon] || "") + esc(label) + "</a>";
  }
  function ctaButtons() {
    var out = [];
    if (L.resume) out.push(btn(L.resume, "Download Résumé", "download", true));
    if (L.email) out.push(btn("mailto:" + L.email, "Email", "mail"));
    if (L.linkedin) out.push(btn(L.linkedin, "LinkedIn", "linkedin"));
    if (L.github) out.push(btn(L.github, "GitHub", "github"));
    return out.join("");
  }
  function pills(items) {
    return '<ul class="pills">' + (items || []).map(function (t) { return '<li class="pill">' + esc(t) + "</li>"; }).join("") + "</ul>";
  }
  function bullets(items) {
    if (!items || !items.length) return "";
    return '<ul class="bullets">' + items.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>";
  }
  function hideSection(id) { var el = document.getElementById(id); if (el) el.hidden = true; }

  /* ── Simple text bindings ── */
  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var v = P[el.getAttribute("data-bind")];
    if (v) el.textContent = v; else if (el.tagName !== "A") el.hidden = true;
  });

  /* ── Navbar résumé link ── */
  var navResume = $("#nav-resume");
  if (L.resume) navResume.href = L.resume; else navResume.hidden = true;

  /* ── Hero ── */
  var loc = [P.location, P.workPreference].filter(Boolean).join(" · ");
  if (loc) $("#hero-loc").innerHTML = ICON.pin + "<span>" + esc(loc) + "</span>";
  else $("#hero-loc").hidden = true;
  $("#hero-ctas").innerHTML = ctaButtons();

  var initials = (P.name || "").split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 2).toUpperCase();
  var frame = document.createElement("div");
  frame.className = "photo-frame";
  frame.innerHTML = '<span class="photo-fallback" aria-hidden="true">' + esc(initials) + "</span>";
  if (P.headshot) {
    var img = new Image();
    img.alt = "Headshot of " + P.name;
    img.width = 300; img.height = 300;
    img.decoding = "async";
    img.onload = function () { frame.innerHTML = ""; frame.appendChild(img); };
    img.src = P.headshot;
  }
  $("#hero-photo").appendChild(frame);

  /* ── Stats ── */
  if (P.stats && P.stats.length) {
    $("#stats").innerHTML = P.stats.map(function (s) {
      return '<div class="card stat"><div class="stat-value">' + esc(s.value) + '</div><div class="stat-label">' + esc(s.label) + "</div></div>";
    }).join("");
  } else hideSection("stats");

  /* ── Summary ── */
  if (P.summary && P.summary.length) {
    $("#summary-body").innerHTML = P.summary.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  } else hideSection("summary");

  /* ── Experience ── */
  if (P.experience && P.experience.length) {
    $("#timeline").innerHTML = P.experience.map(function (j) {
      return '<li class="tl-item reveal">' +
        '<div class="tl-head"><h3>' + esc(j.role) + ' <span class="at">— ' + esc(j.company) + "</span></h3>" +
        '<span class="tl-dates">' + esc(j.dates) + "</span></div>" +
        (j.description ? '<p class="tl-desc">' + esc(j.description) + "</p>" : "") +
        bullets(j.bullets) + "</li>";
    }).join("");
  } else hideSection("experience");
  if (P.earlierExperience) $("#earlier").innerHTML = "<strong>Earlier Experience</strong>" + esc(P.earlierExperience);
  else $("#earlier").hidden = true;

  /* ── Projects ── */
  if (P.projects && P.projects.length) {
    $("#project-grid").innerHTML = P.projects.map(function (p) {
      var links = [];
      if (p.live) links.push('<a href="' + esc(p.live) + '"' + ext(p.live) + ">Live ↗</a>");
      if (p.repo) links.push('<a href="' + esc(p.repo) + '"' + ext(p.repo) + ">GitHub ↗</a>");
      return '<article class="card project reveal">' +
        "<h3>" + esc(p.name) + "</h3>" +
        (p.tagline ? '<p class="tagline">' + esc(p.tagline) + "</p>" : "") +
        bullets(p.bullets) +
        '<div class="project-foot">' + pills(p.tech) +
        (links.length ? '<div class="project-links">' + links.join("") + "</div>" : "") +
        "</div></article>";
    }).join("");
    if (L.github) {
      $("#projects-foot").innerHTML = 'More of my work is on <a href="' + esc(L.github) + '" target="_blank" rel="noopener">GitHub ↗</a>' +
        (L.portfolio ? ' and my <a href="' + esc(L.portfolio) + '" target="_blank" rel="noopener">GitHub Pages portfolio ↗</a>' : "") + ".";
    } else $("#projects-foot").hidden = true;
  } else hideSection("projects");

  /* ── Skills ── */
  if (P.skills && P.skills.length) {
    $("#skills-body").innerHTML = P.skills.map(function (g) {
      return '<div class="skill-group reveal"><h3 class="skill-cat">' + esc(g.group) + "</h3>" + pills(g.items) + "</div>";
    }).join("");
  } else hideSection("skills");

  /* ── Credentials ── */
  if (P.credentials && P.credentials.length) {
    $("#cred-grid").innerHTML = P.credentials.map(function (c) {
      var meta = [c.org, c.year].filter(Boolean).join(" · ");
      return '<div class="card cred reveal"><div class="cred-kind">' + esc(c.kind) + "</div><h3>" + esc(c.title) + "</h3>" +
        (meta ? '<p class="cred-meta">' + esc(meta) + "</p>" : "") + "</div>";
    }).join("");
  } else hideSection("credentials");

  /* ── Optional extra section ── */
  if (P.extra && P.extra.length) {
    $("#extra").hidden = false;
    $("#extra-grid").innerHTML = P.extra.map(function (x) {
      return '<div class="card project reveal"><h3>' + esc(x.title) + '</h3><p class="tagline">' + esc(x.text) + "</p></div>";
    }).join("");
  }

  /* ── Contact & footer ── */
  $("#contact-ctas").innerHTML = ctaButtons();
  $("#copyright").textContent = "© " + new Date().getFullYear() + " " + P.name;
  var fl = [];
  if (L.email) fl.push('<a href="mailto:' + esc(L.email) + '">Email</a>');
  if (L.linkedin) fl.push('<a href="' + esc(L.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>');
  if (L.github) fl.push('<a href="' + esc(L.github) + '" target="_blank" rel="noopener">GitHub</a>');
  if (L.resume) fl.push('<a href="' + esc(L.resume) + '" target="_blank" rel="noopener">Résumé</a>');
  $("#footer-links").innerHTML = fl.join("");

  /* ── Theme toggle ── */
  var root = document.documentElement;
  var themeBtn = $(".theme-btn");
  function syncThemeBtn() {
    var dark = root.dataset.theme !== "light";
    themeBtn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? "#0b0d12" : "#fbfbfd";
  }
  themeBtn.addEventListener("click", function () {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    syncThemeBtn();
  });
  syncThemeBtn();

  /* ── Mobile menu ── */
  var menuBtn = $(".menu-btn"), navLinks = $("#nav-links");
  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    navLinks.classList.toggle("open", open);
  }
  menuBtn.addEventListener("click", function () { setMenu(menuBtn.getAttribute("aria-expanded") !== "true"); });
  navLinks.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* ── Fade-in on scroll ── */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else items.forEach(function (el) { el.classList.add("in"); });
})();
