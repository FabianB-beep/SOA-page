// ── LINEUP DATA ──────────────────────────────────────────────────────────────

const LINEUP = [
  {
    day: 1, stage: "main", time: "17:00", headliner: false,
    artist: "Drops",
    genre:  "80er/90er Pop und Rock",
    origin: "Königswinter",
    desc:   "Drops! Man nehme: Ein Stage-Piano, eine Holzblocktrommel und zwei Sänger. Reicht euch noch nicht? Abwarten!",
    url:    "https://www.backstagepro.de/dropsrockt",
  },
  {
    day: 1, stage: "main", time: "19:00", headliner: false,
    artist: "Bitch on the run",
    genre:  "Blues Cover",
    origin: "Westerwald",
    desc:   "Bitch on the run bringen dreckigen, rohen Blues auf die Bühne – roh, laut und unverfälscht. Coversongs von Klassikern bis zu modernen Blues-Hits.",
    url:    "",
  },
  {
    day: 1, stage: "main", time: "20:15", headliner: false,
    artist: "eXemple",
    genre:  "Rock/Pop Cover",
    origin: "Erkelenz",
    desc:   "eXemple, das sind Beatles, Whitesnake oder U2. Ein Akustik-Quartett mit einem eigenen, handgemachten Groove.",
    url:    "",
  },
  {
    day: 1, stage: "main", time: "21:45", headliner: false,
    artist: "MIXED PICKLES",
    genre:  "Cover Rock",
    origin: "Kasbach/Ohlenberg",
    desc:   "MIXED PICKLES – bunt, laut und ungekämmt. Noch so eine Cover Band! since März.2025.",
    url:    "https://www.instagram.com/mixedpickles.band/",
  },
  {
    day: 1, stage: "main", time: "23:15", headliner: true,
    artist: "ALLES AUF ZUCKER",
    genre:  "Hard Rock",
    origin: "Westerwald",
    desc:   "Der Headliner des Abends. ALLES AUF ZUCKER liefern harten Rock mit Ansage – fette Gitarren, treibende Rhythmen und eine Show, die niemanden kalt lässt.",
    url:    "https://www.instagram.com/allesaufzuckerband/",
  },
  {
    day: 1, stage: "tekkno", time: "AFTER SHOW", headliner: false,
    artist: "Spotify Techno",
    genre:  "Techno",
    origin: "Pfaffenbachtal",
    desc:   "Der Tekkno Bunker öffnet seine Tore. Ab Mitternacht gibt es elektronische Beats bis zum Morgengrauen.",
    url:    "",
  },
];

const STAGE_LABELS = {
  main:   "Main Stage",
  tekkno: "Tekkno Bunker"
};

// ── STAFF / PERSONAL DATA ────────────────────────────────────────────────────

const SHIFTS = [
  // --- Freitag ---
  { day: 1, name: "Fabian Buchmüller",   role: "Leitung",    shift: "frueh",  time: "08:00 – 16:00", area: "Backstage",     note: "Teamleitung Backstage" },
  { day: 1, name: "Heiko Holger Hirsch", role: "Leitung",     shift: "frueh",  time: "09:00 – 17:00", area: "Aggi",          note: "Tankwart" },
  { day: 1, name: "Tobias Rechmann",     role: "Leitung",     shift: "mittel", time: "14:00 – 22:00", area: "Main Stage",    note: "Bühnenbereich" },
  { day: 1, name: "Axel Rüddel",         role: "Leitung",    shift: "mittel", time: "13:00 – 21:00", area: "Nexus Stage",   note: "" },
  { day: 1, name: "Andreas Rechmann",    role: "Service",    shift: "frueh",  time: "07:00 – 15:00", area: "Main Stage",    note: "Tonaufbau" },
  { day: 1, name: "Andreas Krings",      role: "Catering",   shift: "mittel", time: "12:00 – 20:00", area: "Catering",      note: "Bar Ost" },
  { day: 1, name: "Tim Ulama",           role: "Technik",   shift: "spaet",  time: "18:00 – 02:00", area: "Catering",      note: "Bar West" },
  { day: 1, name: "Stefan Kranz",        role: "Service",  shift: "frueh",  time: "08:00 – 16:00", area: "Sanitätsdienst",note: "Sanitätsstation A" },
  { day: 1, name: "Julian Krause",       role: "Service",  shift: "spaet",  time: "16:00 – 00:00", area: "Sanitätsdienst",note: "Sanitätsstation A" },
];

// ── CORNHOLE DATA ────────────────────────────────────────────────────────────
// 14 Teams · 3 Gruppen · 3 Felder parallel · Start 16:00
// Gruppe A (5 Teams) → Feld 1 · Gruppe B (5 Teams) → Feld 2 · Gruppe C (4 Teams) → Feld 3
// Gruppenphase endet ~19:20 (A/B) bzw. ~17:40 (C) · Halbfinale 19:30 · Finale 20:00

const CORNHOLE_TEAMS = [
  // Gruppe A – Feld 1
  { id:  1, name: "Bachtal Bomber",     group: "A", players: ["Jonas W.",     "Markus R."]    },
  { id:  2, name: "Die Holzwerfer",     group: "A", players: ["Stefan K.",    "Tobias H."]    },
  { id:  3, name: "Säcke & Söhne",      group: "A", players: ["Axel B.",      "Patrick N."]   },
  { id:  4, name: "Wurfmaschinen",      group: "A", players: ["Fabian L.",    "Nico S."]      },
  { id:  5, name: "Loch & Weg",         group: "A", players: ["Heiko M.",     "Andreas P."]   },
  // Gruppe B – Feld 2
  { id:  6, name: "Team Kaffeesack",    group: "B", players: ["Florian D.",   "Julian F."]    },
  { id:  7, name: "Windhagener Adler",  group: "B", players: ["Christian T.", "Simon G."]     },
  { id:  8, name: "Two Bags One Hole",  group: "B", players: ["Lars E.",      "Benjamin C."]  },
  { id:  9, name: "Sackgesichter",      group: "B", players: ["Michael B.",   "Rene K."]      },
  { id: 10, name: "Zielwasser e.V.",    group: "B", players: ["Dirk H.",      "Thorsten M."]  },
  // Gruppe C – Feld 3
  { id: 11, name: "Vollpfosten FC",     group: "C", players: ["Oliver S.",    "Marco W."]     },
  { id: 12, name: "Brettl & Sack",      group: "C", players: ["Kevin J.",     "Dennis P."]    },
  { id: 13, name: "Die Ungeworfenen",   group: "C", players: ["Timo R.",      "Philipp N."]   },
  { id: 14, name: "Airball United",     group: "C", players: ["Sebastian L.", "Alexander F."] },
];

const CORNHOLE_MATCHES = [
  // ── Gruppenphase A – Feld 1 (5 Teams · 10 Spiele · 16:00–19:20) ──────────
  { id:  1, round: "Gruppenphase", group: "A", field: 1, time: "16:00", team1:  1, team2:  2, score1: null, score2: null },
  { id:  2, round: "Gruppenphase", group: "A", field: 1, time: "16:20", team1:  3, team2:  4, score1: null, score2: null },
  { id:  3, round: "Gruppenphase", group: "A", field: 1, time: "16:40", team1:  1, team2:  3, score1: null, score2: null },
  { id:  4, round: "Gruppenphase", group: "A", field: 1, time: "17:00", team1:  2, team2:  5, score1: null, score2: null },
  { id:  5, round: "Gruppenphase", group: "A", field: 1, time: "17:20", team1:  4, team2:  5, score1: null, score2: null },
  { id:  6, round: "Gruppenphase", group: "A", field: 1, time: "17:40", team1:  1, team2:  4, score1: null, score2: null },
  { id:  7, round: "Gruppenphase", group: "A", field: 1, time: "18:00", team1:  2, team2:  3, score1: null, score2: null },
  { id:  8, round: "Gruppenphase", group: "A", field: 1, time: "18:20", team1:  1, team2:  5, score1: null, score2: null },
  { id:  9, round: "Gruppenphase", group: "A", field: 1, time: "18:40", team1:  3, team2:  5, score1: null, score2: null },
  { id: 10, round: "Gruppenphase", group: "A", field: 1, time: "19:00", team1:  2, team2:  4, score1: null, score2: null },
  // ── Gruppenphase B – Feld 2 (5 Teams · 10 Spiele · 16:00–19:20) ──────────
  { id: 11, round: "Gruppenphase", group: "B", field: 2, time: "16:00", team1:  6, team2:  7, score1: null, score2: null },
  { id: 12, round: "Gruppenphase", group: "B", field: 2, time: "16:20", team1:  8, team2:  9, score1: null, score2: null },
  { id: 13, round: "Gruppenphase", group: "B", field: 2, time: "16:40", team1:  6, team2:  8, score1: null, score2: null },
  { id: 14, round: "Gruppenphase", group: "B", field: 2, time: "17:00", team1:  7, team2: 10, score1: null, score2: null },
  { id: 15, round: "Gruppenphase", group: "B", field: 2, time: "17:20", team1:  9, team2: 10, score1: null, score2: null },
  { id: 16, round: "Gruppenphase", group: "B", field: 2, time: "17:40", team1:  6, team2:  9, score1: null, score2: null },
  { id: 17, round: "Gruppenphase", group: "B", field: 2, time: "18:00", team1:  7, team2:  8, score1: null, score2: null },
  { id: 18, round: "Gruppenphase", group: "B", field: 2, time: "18:20", team1:  6, team2: 10, score1: null, score2: null },
  { id: 19, round: "Gruppenphase", group: "B", field: 2, time: "18:40", team1:  8, team2: 10, score1: null, score2: null },
  { id: 20, round: "Gruppenphase", group: "B", field: 2, time: "19:00", team1:  7, team2:  9, score1: null, score2: null },
  // ── Gruppenphase C – Feld 3 (4 Teams · 6 Spiele · 16:00–17:40) ───────────
  { id: 21, round: "Gruppenphase", group: "C", field: 3, time: "16:00", team1: 11, team2: 12, score1: null, score2: null },
  { id: 22, round: "Gruppenphase", group: "C", field: 3, time: "16:20", team1: 13, team2: 14, score1: null, score2: null },
  { id: 23, round: "Gruppenphase", group: "C", field: 3, time: "16:40", team1: 11, team2: 13, score1: null, score2: null },
  { id: 24, round: "Gruppenphase", group: "C", field: 3, time: "17:00", team1: 12, team2: 14, score1: null, score2: null },
  { id: 25, round: "Gruppenphase", group: "C", field: 3, time: "17:20", team1: 11, team2: 14, score1: null, score2: null },
  { id: 26, round: "Gruppenphase", group: "C", field: 3, time: "17:40", team1: 12, team2: 13, score1: null, score2: null },
  // ── Halbfinale (19:30) ────────────────────────────────────────────────────
  // Top 1 je Gruppe + bester Gruppenzweiter = 4 Halbfinalisten
  { id: 27, round: "Halbfinale", group: null, field: 1, time: "19:30", team1: null, team2: null, score1: null, score2: null, label1: "1. Gruppe A", label2: "2. Gruppe B" },
  { id: 28, round: "Halbfinale", group: null, field: 2, time: "19:30", team1: null, team2: null, score1: null, score2: null, label1: "1. Gruppe B", label2: "Bester 2. Platz" },
  { id: 29, round: "Halbfinale", group: null, field: 3, time: "19:30", team1: null, team2: null, score1: null, score2: null, label1: "1. Gruppe C", label2: "2. Gruppe A" },
  // ── Spiel um Platz 3 & Finale (20:00) ────────────────────────────────────
  { id: 30, round: "Platz 3",  group: null, field: 1, time: "20:00", team1: null, team2: null, score1: null, score2: null, label1: "Verlierer HF 1", label2: "Verlierer HF 2" },
  { id: 31, round: "Finale",   group: null, field: 2, time: "20:00", team1: null, team2: null, score1: null, score2: null, label1: "Sieger HF 1",   label2: "Sieger HF 2"   },
];

const DAY_LABELS = {
  // 1: "Fr, 26. Juni",
  1: "Sa, 27. Juni",
  // 3: "So, 28. Juni",
};

const SHIFT_LABELS = {
  frueh:  "Frühschicht",
  mittel: "Mittelschicht",
  spaet:  "Spätschicht",
  nacht:  "Nachtschicht",
};

// ── INTERNE HELFERDATEN ───────────────────────────────────────────────────────

const HELFER_SLOTS = [
  // ── Bändchenausgabe ───────────────────────────────────────────────────────
  { bereich: "Bändchenausgabe", slot: "14:00 – 16:00", helfer: ["Max Mustermann", "Lisa Klein"] },
  { bereich: "Bändchenausgabe", slot: "16:00 – 19:00", helfer: ["Tom Sauer", "Anna Becker"] },
  { bereich: "Bändchenausgabe", slot: "19:00 – 22:00", helfer: ["Julia Müller", "Ben Roth"] },
  // ── Theke ─────────────────────────────────────────────────────────────────
  { bereich: "Theke", slot: "15:00 – 18:00", helfer: ["Peter Herrmann", "Sandra Vogt", "Kai Fischer"] },
  { bereich: "Theke", slot: "18:00 – 21:00", helfer: ["Markus Braun", "Laura Neumann", "Stefan Wolf"] },
  { bereich: "Theke", slot: "21:00 – 00:00", helfer: ["Tobias Lang", "Nina Schäfer", "David Koch"] },
  { bereich: "Theke", slot: "00:00 – 03:00", helfer: ["Felix Huber", "Lena Walter"] },
  // ── Grill ─────────────────────────────────────────────────────────────────
  { bereich: "Grill", slot: "15:00 – 18:00", helfer: ["Christian Schmitt", "Rene Bauer"] },
  { bereich: "Grill", slot: "18:00 – 21:00", helfer: ["Oliver Stein", "Marco Werner"] },
  { bereich: "Grill", slot: "21:00 – 00:00", helfer: ["Kevin Jung", "Dennis Pfeiffer"] },
];

const HELFER_DAUERDIENSTE = [
  { aufgabe: "Aggi-Dienst",        verantwortlich: "Heiko Holger Hirsch", helfer: [],                            note: "Tankwart – dauerhaft vor Ort" },
  { aufgabe: "Moderation",         verantwortlich: "Tobias Rechmann",      helfer: [],                            note: "Bühnenansagen & Ablauf Main Stage" },
  { aufgabe: "Künstlerbetreuung",  verantwortlich: "Fabian Buchmüller",    helfer: ["Andreas Rechmann"],          note: "Backstage, Catering Künstler, Koordination" },
];
