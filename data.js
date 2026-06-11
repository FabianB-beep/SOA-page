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
// 14 Teams · 3 Gruppen · 3 Felder parallel · Start 16:00
// Gruppe A (5 Teams) → Feld 1 · Gruppe B (5 Teams) → Feld 2 · Gruppe C (4 Teams) → Feld 3
// Gruppenphase endet ~19:20 (A/B) bzw. ~17:40 (C) · Halbfinale 19:30 · Finale 20:00

const CORNHOLE_TEAMS = [
  // Gruppen-Zuteilung für spätere Nutzung (A/B/C) – aktuell nur Teamname angezeigt
  { id:  1, name: "Awmb,akwmv",                      group: "A", players: [] },
  { id:  2, name: "...die Bio-Mechanischen",          group: "A", players: [] },
  { id:  3, name: "PWG Turbo",                        group: "A", players: [] },
  { id:  4, name: "MUPPETS",                          group: "A", players: [] },
  { id:  5, name: "Pommes & Champagner",              group: "B", players: [] },
  { id:  6, name: "Die Bio-Mechanischen-Weltraumstiere", group: "B", players: [] },
  { id:  7, name: "Unicorns",                         group: "B", players: [] },
  { id:  8, name: "Two Girls one Sack",               group: "B", players: [] },
  { id:  9, name: "Team Hecken Frisch-Vermählt",      group: "C", players: [] },
  { id: 10, name: "Die brunftigen Beutel Boys",       group: "C", players: [] },
  { id: 11, name: "Mais-ter Mädels",                  group: "C", players: [] },
  { id: 12, name: "Die Beutelbrüder",                 group: "C", players: [] },
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
