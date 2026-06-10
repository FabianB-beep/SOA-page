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

  grid.querySelectorAll(".lineup__card").forEach((card, i) => {
    card.classList.add("visible");
    card.addEventListener("click", () => openModal(filtered[i]));
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

// ── LINEUP MODAL ─────────────────────────────────────────────────────────────

const backdrop   = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");

function openModal(act) {
  document.getElementById("modalStage").textContent  = STAGE_LABELS[act.stage] || act.stage;
  document.getElementById("modalTime").textContent   = act.time;
  document.getElementById("modalGenre").textContent  = act.genre;

  const originEl  = document.getElementById("modalOrigin");
  const originSep = document.getElementById("modalOriginSep");
  if (act.origin) {
    originEl.textContent  = act.origin;
    originSep.hidden = originEl.hidden = false;
  } else {
    originSep.hidden = originEl.hidden = true;
  }

  document.getElementById("modalArtist").textContent = act.artist;
  document.getElementById("modalDesc").textContent   = act.desc || "";

  const footer = document.getElementById("modalFooter");
  footer.innerHTML = "";
  if (act.headliner) {
    const hl = document.createElement("span");
    hl.className = "modal__badge modal__badge--hl";
    hl.textContent = "⭐ Headliner";
    footer.appendChild(hl);
  }
  if (act.url) {
    const link = document.createElement("a");
    link.className = "modal__badge";
    link.href = act.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "↗ Mehr erfahren";
    footer.appendChild(link);
  }

  backdrop.hidden = false;
  requestAnimationFrame(() => backdrop.classList.add("modal--visible"));
  document.body.style.overflow = "hidden";
}

function closeModal() {
  backdrop.classList.remove("modal--visible");
  backdrop.addEventListener("transitionend", () => {
    backdrop.hidden = true;
    document.body.style.overflow = "";
  }, { once: true });
}

modalClose.addEventListener("click", closeModal);
backdrop.addEventListener("click", e => { if (e.target === backdrop) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !backdrop.hidden) closeModal(); });

// ── CORNHOLE ─────────────────────────────────────────────────────────────────

function renderCornholeTeams() {
  ["A", "B", "C"].forEach(group => {
    const container = document.getElementById(`ch-teams-${group}`);
    if (!container) return;
    const teams = CORNHOLE_TEAMS.filter(t => t.group === group);
    container.innerHTML = teams.map((t, i) => `
      <div class="ch-team">
        <div class="ch-team__num">${i + 1}</div>
        <div class="ch-team__info">
          <div class="ch-team__name">${t.name}</div>
          <div class="ch-team__players">${t.players.join(" · ")}</div>
        </div>
      </div>
    `).join("");
  });
}

function renderCornholeSchedule() {
  const container = document.getElementById("ch-schedule");
  if (!container) return;

  const teamMap = Object.fromEntries(CORNHOLE_TEAMS.map(t => [t.id, t]));

  const rounds = [...new Set(CORNHOLE_MATCHES.map(m => m.round))];

  container.innerHTML = `<div class="ch-rounds">${rounds.map(round => {
    const matches = CORNHOLE_MATCHES.filter(m => m.round === round);
    const isFinal = round === "Finale";
    return `
      <div>
        <div class="ch-round__title">${round}</div>
        <div class="ch-matches">
          ${matches.map(m => {
            const t1    = m.team1 ? teamMap[m.team1]?.name : (m.label1 || "TBD");
            const t2    = m.team2 ? teamMap[m.team2]?.name : (m.label2 || "TBD");
            const tbd1  = !m.team1;
            const tbd2  = !m.team2;
            const score = (m.score1 !== null && m.score2 !== null)
              ? `<span class="ch-match__score ch-match__score--set">${m.score1}:${m.score2}</span>`
              : `<span class="ch-match__score">–:–</span>`;
            return `
              <div class="ch-match${isFinal ? " ch-match--final" : ""}">
                <div class="ch-match__time">${m.time} Uhr</div>
                <div class="ch-match__team${tbd1 ? " ch-match__team--tbd" : ""}">${t1}</div>
                <div class="ch-match__vs">VS</div>
                <div class="ch-match__team ch-match__team--right${tbd2 ? " ch-match__team--tbd" : ""}">${t2}</div>
                ${score}
                <div class="ch-match__field">Feld ${m.field}</div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }).join("")}</div>`;
}

renderCornholeTeams();
renderCornholeSchedule();

// Cornhole tab switching
document.querySelectorAll(".cornhole__tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cornhole__tab").forEach(b => b.classList.remove("cornhole__tab--active"));
    btn.classList.add("cornhole__tab--active");
    const tab = btn.dataset.chTab;
    document.getElementById("ch-panel-teams").classList.toggle("cornhole__panel--hidden", tab !== "teams");
    document.getElementById("ch-panel-schedule").classList.toggle("cornhole__panel--hidden", tab !== "schedule");
  });
});

// ── INTERSECTION OBSERVER (fade-in) ──────────────────────────────────────────

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".about__card, .lineup__card").forEach(el => {
  observer.observe(el);
});
