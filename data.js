// ── LINEUP DATA ──────────────────────────────────────────────────────────────

const LINEUP = [
  {
    day: 1, stage: "cornhole", time: "17:00",
    artist: "Drops",
    genre:  "80er/90er Pop und Rock",
    origin: "Königswinter",
    desc:   "Drops! Man nehme: Ein Stage-Piano, eine Holzblocktrommel und zwei Sänger. Reicht euch noch nicht? Abwarten!",
    url:    "https://www.backstagepro.de/dropsrockt",
  },
  {
    day: 1, stage: "main", time: "19:00",    artist: "Bitch on the run",
    genre:  "Blues Cover",
    origin: "Westerwald",
    desc:   "Bitch on the run bringen dreckigen, rohen Blues auf die Bühne – roh, laut und unverfälscht. Coversongs von Klassikern bis zu modernen Blues-Hits.",
    url:    "",
  },
  {
    day: 1, stage: "main", time: "20:15",    artist: "eXemple",
    genre:  "Rock/Pop Cover",
    origin: "Erkelenz",
    desc:   "eXemple, das sind Beatles, Whitesnake oder U2. Ein Akustik-Quartett mit einem eigenen, handgemachten Groove.",
    url:    "",
  },
  {
    day: 1, stage: "main", time: "21:45",    artist: "MIXED PICKLES",
    genre:  "Cover Rock",
    origin: "Kasbach/Ohlenberg",
    desc:   "MIXED PICKLES – bunt, laut und ungekämmt. Noch so eine Cover Band! since März.2025.",
    url:    "https://www.instagram.com/mixedpickles.band/",
  },
  {
    day: 1, stage: "main", time: "23:15",    artist: "ALLES AUF ZUCKER",
    genre:  "Hard Rock",
    origin: "Westerwald",
    desc:   "Der Headliner des Abends. ALLES AUF ZUCKER liefern harten Rock mit Ansage – fette Gitarren, treibende Rhythmen und eine Show, die niemanden kalt lässt.",
    url:    "https://www.instagram.com/allesaufzuckerband/",
  },
  {
    day: 1, stage: "tekkno", time: "AFTER SHOW",    artist: "Spotify Techno",
    genre:  "Techno",
    origin: "Pfaffenbachtal",
    desc:   "Der Tekkno Bunker öffnet seine Tore. Ab Mitternacht gibt es elektronische Beats bis zum Morgengrauen.",
    url:    "",
  },
];

const STAGE_LABELS = {
  main:     "Main Stage",
  tekkno:   "Tekkno Bunker",
  cornhole: "Cornhole Stage",
};


// ── CORNHOLE DATA ────────────────────────────────────────────────────────────
// Alle Cornhole-Daten werden in results.js gepflegt.

const CORNHOLE_TEAMS   = [];  // wird aus results.js befüllt
const CORNHOLE_MATCHES = [];  // wird aus results.js befüllt


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
