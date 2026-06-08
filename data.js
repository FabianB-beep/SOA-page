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
    genre:  "Art Pop",
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
    day: 1, stage: "tekkno", time: "23:59", headliner: false,
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
