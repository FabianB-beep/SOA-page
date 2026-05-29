// ── LINEUP DATA ──────────────────────────────────────────────────────────────

const LINEUP = [
// --- Day 1 (Freitag) ---
  // { day: 1, stage: "tekkno",   time: "22:00", artist: "Spotify Techno",      genre: "Techno",      headliner: false },

  // --- Day 2 (Samstag) ---
  { day: 1, stage: "main",   time: "19:00", artist: "Bitch on the run",      genre: "Blues Cover",      headliner: false },
  { day: 1, stage: "main",   time: "20:15", artist: "eXemple",               genre: "Electronic",      headliner: false },
  { day: 1, stage: "main",   time: "21:45", artist: "MIXED PICKLES",         genre: "Art Pop",         headliner: false  },
  { day: 1, stage: "main",   time: "23:15", artist: "ALLES AUF ZUCKER",      genre: "Hard Rock",       headliner: true },
  { day: 1, stage: "tekkno", time: "23:59", artist: "Spotify Techno",   genre: "Techno",      headliner: false },

  // { day: 3, stage: "tekkno",   time: "01:00", artist: "Spotify Techno",      genre: "Techno",      headliner: false },


  
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
