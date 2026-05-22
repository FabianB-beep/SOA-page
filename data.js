// ── LINEUP DATA ──────────────────────────────────────────────────────────────

const LINEUP = [
  // --- Day 1 (Freitag) ---
  { day: 1, stage: "main",   time: "18:00", artist: "Local Echoes",      genre: "Indie Rock",      headliner: false },
  { day: 1, stage: "main",   time: "20:00", artist: "BLVCK HORIZON",     genre: "Electronic",      headliner: false },
  { day: 1, stage: "main",   time: "22:30", artist: "Aurora Collective",  genre: "Art Pop",         headliner: true  },
  { day: 1, stage: "nexus",  time: "17:00", artist: "Synthwave Berlin",   genre: "Synthwave",       headliner: false },
  { day: 1, stage: "nexus",  time: "19:30", artist: "Nico Vega",          genre: "Rock",            headliner: false },
  { day: 1, stage: "nexus",  time: "22:00", artist: "MAJESTIC",           genre: "Nu Disco",        headliner: false },
  { day: 1, stage: "forest", time: "16:00", artist: "Jade & The Woods",   genre: "Folk",            headliner: false },
  { day: 1, stage: "forest", time: "18:30", artist: "Ruyam",              genre: "World Music",     headliner: false },
  { day: 1, stage: "forest", time: "21:00", artist: "Café del Sol Live",  genre: "Jazz Fusion",     headliner: false },
  { day: 1, stage: "club",   time: "23:00", artist: "DJ Kessler",         genre: "Techno",          headliner: false },
  { day: 1, stage: "club",   time: "01:00", artist: "RAVEN",              genre: "Dark Techno",     headliner: false },

  // --- Day 2 (Samstag) ---
  { day: 2, stage: "main",   time: "16:00", artist: "Moritz Klein Trio",  genre: "Jazz",            headliner: false },
  { day: 2, stage: "main",   time: "18:30", artist: "Phoebe Riot",        genre: "Dream Pop",       headliner: false },
  { day: 2, stage: "main",   time: "21:00", artist: "ZENITH",             genre: "Electronica",     headliner: true  },
  { day: 2, stage: "main",   time: "23:30", artist: "The Velvet Parade",  genre: "Indie Funk",      headliner: false },
  { day: 2, stage: "nexus",  time: "15:00", artist: "Dawnbreaker",        genre: "Post-Rock",       headliner: false },
  { day: 2, stage: "nexus",  time: "18:00", artist: "Sasha M.",           genre: "House",           headliner: false },
  { day: 2, stage: "nexus",  time: "21:30", artist: "Hyperion",           genre: "Drum & Bass",     headliner: false },
  { day: 2, stage: "forest", time: "14:00", artist: "Workshop: Beatbox",  genre: "Workshop",        headliner: false },
  { day: 2, stage: "forest", time: "17:00", artist: "Luna & Friends",     genre: "Acoustic",        headliner: false },
  { day: 2, stage: "forest", time: "20:00", artist: "Tropic Rain",        genre: "Reggae",          headliner: false },
  { day: 2, stage: "club",   time: "23:30", artist: "OBJEKT",             genre: "Techno",          headliner: false },
  { day: 2, stage: "club",   time: "02:00", artist: "Mira Volkov",        genre: "Minimal Techno",  headliner: false },

  // --- Day 3 (Sonntag) ---
  { day: 3, stage: "main",   time: "15:00", artist: "Sunday Vibes Band",  genre: "Funk",            headliner: false },
  { day: 3, stage: "main",   time: "17:30", artist: "NEON KITE",          genre: "Synth Pop",       headliner: false },
  { day: 3, stage: "main",   time: "20:00", artist: "Lena Marquez",       genre: "Singer-Songwriter",headliner: false },
  { day: 3, stage: "main",   time: "22:00", artist: "PULSE",              genre: "Electronic Rock", headliner: true  },
  { day: 3, stage: "nexus",  time: "14:00", artist: "Chill Collective",   genre: "Chillout",        headliner: false },
  { day: 3, stage: "nexus",  time: "17:00", artist: "Tom Haze",           genre: "Progressive",     headliner: false },
  { day: 3, stage: "nexus",  time: "20:30", artist: "Electra Noir",       genre: "Industrial",      headliner: false },
  { day: 3, stage: "forest", time: "13:00", artist: "Open Mic Session",   genre: "Diverses",        headliner: false },
  { day: 3, stage: "forest", time: "16:00", artist: "Sunshine Gospel",    genre: "Gospel",          headliner: false },
  { day: 3, stage: "forest", time: "19:00", artist: "Closing Ceremony",   genre: "Special",         headliner: false },
  { day: 3, stage: "club",   time: "22:00", artist: "Finale Party",       genre: "Mixed",           headliner: false },
];

const STAGE_LABELS = {
  main:   "Main Stage",
  nexus:  "Nexus Stage",
  forest: "Forest Stage",
  club:   "Club Stage",
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

  // --- Samstag ---
  { day: 2, name: "Anna Müller",      role: "Leitung",    shift: "mittel", time: "12:00 – 20:00", area: "Main Stage",    note: "Koordination Headliner" },
  { day: 2, name: "Ben Schulz",       role: "Ordner",     shift: "mittel", time: "14:00 – 22:00", area: "Main Stage",    note: "" },
  { day: 2, name: "Clara Zimmer",     role: "Ordner",     shift: "spaet",  time: "20:00 – 04:00", area: "Einlass",       note: "Nachteinlass" },
  { day: 2, name: "David Koch",       role: "Technik",    shift: "frueh",  time: "08:00 – 16:00", area: "Technik",       note: "Hauptbühne Soundcheck" },
  { day: 2, name: "Eva Braun",        role: "Technik",    shift: "mittel", time: "14:00 – 22:00", area: "Main Stage",    note: "" },
  { day: 2, name: "Felix Wagner",     role: "Catering",   shift: "frueh",  time: "10:00 – 18:00", area: "Catering",      note: "Bar Ost" },
  { day: 2, name: "Greta Hoffmann",   role: "Catering",   shift: "spaet",  time: "18:00 – 02:00", area: "Catering",      note: "" },
  { day: 2, name: "Hans Weber",       role: "Sanitäter",  shift: "mittel", time: "12:00 – 20:00", area: "Sanitätsdienst",note: "" },
  { day: 2, name: "Iris Klein",       role: "Sanitäter",  shift: "nacht",  time: "22:00 – 06:00", area: "Sanitätsdienst",note: "Nachtbereitschaft" },
  { day: 2, name: "Jonas Meyer",      role: "Ordner",     shift: "spaet",  time: "20:00 – 04:00", area: "Club Stage",    note: "" },
  { day: 2, name: "Klara Becker",     role: "Technik",    shift: "spaet",  time: "21:00 – 05:00", area: "Club Stage",    note: "" },
  { day: 2, name: "Lars Fischer",     role: "Ordner",     shift: "frueh",  time: "10:00 – 18:00", area: "Forest Stage",  note: "" },
  { day: 2, name: "Mia Sauer",        role: "Leitung",    shift: "mittel", time: "14:00 – 22:00", area: "Nexus Stage",   note: "" },
  { day: 2, name: "Noah Richter",     role: "Technik",    shift: "mittel", time: "12:00 – 20:00", area: "Nexus Stage",   note: "" },
  { day: 2, name: "Olivia Lange",     role: "Catering",   shift: "mittel", time: "12:00 – 20:00", area: "Catering",      note: "Food Court" },
  { day: 2, name: "Peter Vogel",      role: "Ordner",     shift: "frueh",  time: "08:00 – 16:00", area: "Einlass",       note: "Kontingent-Kontrolle" },
  { day: 2, name: "Quentin Baum",     role: "Technik",    shift: "nacht",  time: "00:00 – 08:00", area: "Technik",       note: "Notfalldienst" },

  // --- Sonntag ---
  { day: 3, name: "Anna Müller",      role: "Leitung",    shift: "mittel", time: "14:00 – 22:00", area: "Main Stage",    note: "Abschlussveranstaltung" },
  { day: 3, name: "Ben Schulz",       role: "Ordner",     shift: "mittel", time: "13:00 – 21:00", area: "Einlass",       note: "" },
  { day: 3, name: "Clara Zimmer",     role: "Ordner",     shift: "mittel", time: "14:00 – 22:00", area: "Forest Stage",  note: "" },
  { day: 3, name: "David Koch",       role: "Technik",    shift: "frueh",  time: "09:00 – 17:00", area: "Main Stage",    note: "Abbau vorbereiten" },
  { day: 3, name: "Eva Braun",        role: "Technik",    shift: "mittel", time: "14:00 – 22:00", area: "Main Stage",    note: "" },
  { day: 3, name: "Felix Wagner",     role: "Catering",   shift: "mittel", time: "12:00 – 20:00", area: "Catering",      note: "" },
  { day: 3, name: "Greta Hoffmann",   role: "Catering",   shift: "spaet",  time: "18:00 – 00:00", area: "Catering",      note: "Closing Party" },
  { day: 3, name: "Hans Weber",       role: "Sanitäter",  shift: "frueh",  time: "10:00 – 18:00", area: "Sanitätsdienst",note: "" },
  { day: 3, name: "Iris Klein",       role: "Sanitäter",  shift: "spaet",  time: "18:00 – 00:00", area: "Sanitätsdienst",note: "" },
  { day: 3, name: "Jonas Meyer",      role: "Ordner",     shift: "spaet",  time: "20:00 – 02:00", area: "Club Stage",    note: "Finale Party" },
  { day: 3, name: "Lars Fischer",     role: "Ordner",     shift: "frueh",  time: "10:00 – 18:00", area: "Einlass",       note: "" },
  { day: 3, name: "Mia Sauer",        role: "Leitung",    shift: "spaet",  time: "18:00 – 00:00", area: "Nexus Stage",   note: "" },
  { day: 3, name: "Noah Richter",     role: "Technik",    shift: "mittel", time: "13:00 – 21:00", area: "Nexus Stage",   note: "" },
  { day: 3, name: "Olivia Lange",     role: "Catering",   shift: "mittel", time: "12:00 – 20:00", area: "Catering",      note: "Food Court" },
  { day: 3, name: "Peter Vogel",      role: "Ordner",     shift: "frueh",  time: "10:00 – 18:00", area: "Forest Stage",  note: "Abbaubegleitung" },
];

const DAY_LABELS = {
  1: "Fr, 18. Juli",
  2: "Sa, 19. Juli",
  3: "So, 20. Juli",
};

const SHIFT_LABELS = {
  frueh:  "Frühschicht",
  mittel: "Mittelschicht",
  spaet:  "Spätschicht",
  nacht:  "Nachtschicht",
};
