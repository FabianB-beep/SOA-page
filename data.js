// ── LINEUP DATA ──────────────────────────────────────────────────────────────

const LINEUP = [
// --- Day 1 (Freitag) ---
  // { day: 1, stage: "tekkno",   time: "22:00", artist: "Spotify Techno",      genre: "Techno",      headliner: false },

  // --- Day 2 (Samstag) ---
  { day: 1, stage: "main",   time: "19:00", artist: "Bitch on the run",      genre: "Blues Cover",      headliner: false },
  { day: 1, stage: "main",   time: "20:15", artist: "eXemple",               genre: "Electronic",      headliner: false },
  { day: 1, stage: "main",   time: "21:45", artist: "MIXED PICKLES",         genre: "Art Pop",         headliner: false  },
  { day: 1, stage: "main",   time: "23:15", artist: "ALLES AUF ZUCKER",      genre: "Hard Rock",       headliner: true },
  { day: 3, stage: "tekkno", time: "After Show", artist: "Spotify Techno",      genre: "Techno",      headliner: false },

  // { day: 3, stage: "tekkno",   time: "01:00", artist: "Spotify Techno",      genre: "Techno",      headliner: false },


  
];

const STAGE_LABELS = {
  main:   "Main Stage",
  tekkno: "Tekkno Bunker"
};

// ── STAFF / PERSONAL DATA ────────────────────────────────────────────────────

const SHIFTS = [
  // --- Freitag ---
  { day: 1, name: "Anna Müller",      role: "Leitung",    shift: "frueh",  time: "08:00 – 16:00", area: "Einlass",       note: "Teamleitung Einlass" },
  { day: 1, name: "Ben Schulz",       role: "Ordner",     shift: "frueh",  time: "09:00 – 17:00", area: "Einlass",       note: "" },
  { day: 1, name: "Clara Zimmer",     role: "Ordner",     shift: "mittel", time: "14:00 – 22:00", area: "Main Stage",    note: "Bühnenbereich" },
  { day: 1, name: "David Koch",       role: "Technik",    shift: "frueh",  time: "07:00 – 15:00", area: "Main Stage",    note: "Tonaufbau" },
  { day: 1, name: "Eva Braun",        role: "Technik",    shift: "mittel", time: "13:00 – 21:00", area: "Nexus Stage",   note: "" },
  { day: 1, name: "Felix Wagner",     role: "Catering",   shift: "mittel", time: "12:00 – 20:00", area: "Catering",      note: "Bar Ost" },
  { day: 1, name: "Greta Hoffmann",   role: "Catering",   shift: "spaet",  time: "18:00 – 02:00", area: "Catering",      note: "Bar West" },
  { day: 1, name: "Hans Weber",       role: "Sanitäter",  shift: "frueh",  time: "08:00 – 16:00", area: "Sanitätsdienst",note: "Sanitätsstation A" },
  { day: 1, name: "Iris Klein",       role: "Sanitäter",  shift: "spaet",  time: "16:00 – 00:00", area: "Sanitätsdienst",note: "Sanitätsstation A" },
  { day: 1, name: "Jonas Meyer",      role: "Ordner",     shift: "spaet",  time: "18:00 – 02:00", area: "Club Stage",    note: "Einlasskontrolle" },
  { day: 1, name: "Klara Becker",     role: "Technik",    shift: "spaet",  time: "20:00 – 04:00", area: "Club Stage",    note: "DJ-Technik" },
  { day: 1, name: "Lars Fischer",     role: "Ordner",     shift: "frueh",  time: "08:00 – 16:00", area: "Einlass",       note: "" },
  { day: 1, name: "Mia Sauer",        role: "Leitung",    shift: "spaet",  time: "16:00 – 00:00", area: "Forest Stage",  note: "Bühnenleitung" },
  { day: 1, name: "Noah Richter",     role: "Technik",    shift: "mittel", time: "14:00 – 22:00", area: "Forest Stage",  note: "Licht & Ton" },
  { day: 1, name: "Olivia Lange",     role: "Catering",   shift: "frueh",  time: "10:00 – 18:00", area: "Catering",      note: "Food Court" },

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
