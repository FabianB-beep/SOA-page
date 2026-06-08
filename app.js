// ── NAVIGATION ───────────────────────────────────────────────────────────────

const nav     = document.getElementById("nav");
const burger  = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  nav.classList.toggle("nav--scrolled", window.scrollY > 50);
});

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav__links--open");
  burger.classList.toggle("nav__burger--open");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("nav__links--open");
    burger.classList.remove("nav__burger--open");
  });
});

// Smooth scroll for hash links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ── COUNTDOWN ────────────────────────────────────────────────────────────────

const festivalDate = new Date("2026-06-27T12:00:00");

function updateCountdown() {
  const diff = festivalDate - Date.now();
  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = '<p class="countdown__live">Das Festival läuft gerade!</p>';
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById("cd-days").textContent  = String(d).padStart(2, "0");
  document.getElementById("cd-hours").textContent = String(h).padStart(2, "0");
  document.getElementById("cd-mins").textContent  = String(m).padStart(2, "0");
  document.getElementById("cd-secs").textContent  = String(s).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ── LINEUP ───────────────────────────────────────────────────────────────────

let activeDay   = 1;
let activeStage = "all";

function renderLineup() {
  const grid = document.getElementById("lineupGrid");
  const filtered = LINEUP.filter(a =>
    a.day === activeDay &&
    (activeStage === "all" || a.stage === activeStage)
  ).sort((a, b) => a.time.localeCompare(b.time));

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="lineup__empty">Kein Programm für diese Auswahl.</p>';
    return;
  }

  grid.innerHTML = filtered.map(a => `
    <div class="lineup__card${a.headliner ? " lineup__card--headliner" : ""}">
      <div class="lineup__card-stage">${STAGE_LABELS[a.stage]}</div>
      <div class="lineup__card-time">${a.time}</div>
      <div class="lineup__card-artist">${a.artist}</div>
      <div class="lineup__card-genre">${a.genre}</div>
      ${a.headliner ? '<div class="lineup__card-hl">Headliner</div>' : ""}
    </div>
  `).join("");

  grid.querySelectorAll(".lineup__card").forEach(card => {
  card.classList.add("visible");
});
  
}

// Day tabs
document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("tab--active"));
    btn.classList.add("tab--active");
    activeDay = Number(btn.dataset.day);
    renderLineup();
  });
});

// Stage filter
document.querySelectorAll(".stage-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".stage-btn").forEach(b => b.classList.remove("stage-btn--active"));
    btn.classList.add("stage-btn--active");
    activeStage = btn.dataset.stage;
    renderLineup();
  });
});

renderLineup();

// ── SCHEDULE ─────────────────────────────────────────────────────────────────

const filterDay    = document.getElementById("filterDay");
const filterArea   = document.getElementById("filterArea");
const filterRole   = document.getElementById("filterRole");
const searchPerson = document.getElementById("searchPerson");

if (filterDay && filterArea && filterRole && searchPerson) {
  function shiftBadge(shift) {
    return `<span class="badge badge--${shift}">${SHIFT_LABELS[shift]}</span>`;
  }

  function renderSchedule() {
    const day    = filterDay.value;
    const area   = filterArea.value;
    const role   = filterRole.value;
    const search = searchPerson.value.trim().toLowerCase();

    const filtered = SHIFTS.filter(s =>
      (day  === "all" || String(s.day)  === day) &&
      (area === "all" || s.area  === area) &&
      (role === "all" || s.role  === role) &&
      (search === ""  || s.name.toLowerCase().includes(search))
    ).sort((a, b) => a.day - b.day || a.name.localeCompare(b.name));

    const empty = document.getElementById("scheduleEmpty");
    empty.classList.toggle("hidden", filtered.length > 0);

    const tbody = document.getElementById("scheduleBody");
    tbody.innerHTML = filtered.map(s => `
      <tr>
        <td class="schedule__name">${s.name}</td>
        <td><span class="role-badge">${s.role}</span></td>
        <td>${DAY_LABELS[s.day]}</td>
        <td>${shiftBadge(s.shift)}</td>
        <td class="schedule__time">${s.time}</td>
        <td><span class="area-badge">${s.area}</span></td>
        <td class="schedule__note">${s.note || "–"}</td>
      </tr>
    `).join("");

    const cards = document.getElementById("scheduleCards");
    cards.innerHTML = filtered.map(s => `
      <div class="scard">
        <div class="scard__header">
          <div>
            <div class="scard__name">${s.name}</div>
            <div class="scard__meta"><span class="role-badge">${s.role}</span></div>
          </div>
          ${shiftBadge(s.shift)}
        </div>
        <div class="scard__body">
          <div class="scard__row"><span>Tag</span><span>${DAY_LABELS[s.day]}</span></div>
          <div class="scard__row"><span>Uhrzeit</span><span>${s.time}</span></div>
          <div class="scard__row"><span>Bereich</span><span><span class="area-badge">${s.area}</span></span></div>
          ${s.note ? `<div class="scard__row"><span>Notiz</span><span>${s.note}</span></div>` : ""}
        </div>
      </div>
    `).join("");
  }

  filterDay.addEventListener("change", renderSchedule);
  filterArea.addEventListener("change", renderSchedule);
  filterRole.addEventListener("change", renderSchedule);
  searchPerson.addEventListener("input", renderSchedule);

  renderSchedule();
}

// ── INTERSECTION OBSERVER (fade-in) ──────────────────────────────────────────

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".about__card, .ticket-card, .lineup__card").forEach(el => {
  observer.observe(el);
});
