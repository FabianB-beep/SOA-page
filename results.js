// ── CORNHOLE TURNIER CONFIG ───────────────────────────────────────────────────
// Diese Datei ist die einzige die für das Turnier gepflegt werden muss.
// data.js und app.js müssen nicht angefasst werden.


// ── TEAMS ─────────────────────────────────────────────────────────────────────
// Reihenfolge = Team-ID (1–12). Gruppe wird für spätere Gruppenanzeige genutzt.

const CORNHOLE_TEAMS_CONFIG = [
  { id:  1, name: "Awmb,akwmv",                         group: "A" },
  { id:  2, name: "...die Bio-Mechanischen",             group: "A" },
  { id:  3, name: "PWG Turbo",                           group: "A" },
  { id:  4, name: "MUPPETS",                             group: "A" },
  { id:  5, name: "Pommes & Champagner",                 group: "B" },
  { id:  6, name: "Die Bio-Mechanischen-Weltraumstiere", group: "B" },
  { id:  7, name: "Unicorns",                            group: "B" },
  { id:  8, name: "Two Girls one Sack",                  group: "B" },
  { id:  9, name: "Team Hecken Frisch-Vermählt",         group: "C" },
  { id: 10, name: "Die brunftigen Beutel Boys",          group: "C" },
  { id: 11, name: "Mais-ter Mädels",                     group: "C" },
  { id: 12, name: "Die Beutelbrüder",                    group: "C" },
];


// ── PAARUNGEN ─────────────────────────────────────────────────────────────────
// Format:  Match-ID : [Team-ID 1, Team-ID 2]
// Nur Gruppenphase (IDs 1–26) – Halbfinale/Finale werden manuell eingetragen.

const CORNHOLE_PAIRINGS = {
  // Gruppenphase A
   1: [ 1,  2],
   2: [ 3,  4],
   3: [ 1,  3],
   4: [ 2,  5],
   5: [ 4,  5],
   6: [ 1,  4],
   7: [ 2,  3],
   8: [ 1,  5],
   9: [ 3,  5],
  10: [ 2,  4],
  // Gruppenphase B
  11: [ 6,  7],
  12: [ 8,  9],
  13: [ 6,  8],
  14: [ 7, 10],
  15: [ 9, 10],
  16: [ 6,  9],
  17: [ 7,  8],
  18: [ 6, 10],
  19: [ 8, 10],
  20: [ 7,  9],
  // Gruppenphase C
  21: [11, 12],
  22: [13, 14],
  23: [11, 13],
  24: [12, 14],
  25: [11, 14],
  26: [12, 13],
};


// ── ERGEBNISSE ────────────────────────────────────────────────────────────────
// Format:  Match-ID : [Punkte Team 1, Punkte Team 2]
// Nicht gespielte Spiele einfach weglassen oder auskommentieren.

const CORNHOLE_RESULTS = {
  // Gruppenphase A
  // 1: [21, 14],
  // 2: [18, 21],
  // ...

  // Gruppenphase B
  // 11: [21, 14],
  // ...

  // Gruppenphase C
  // 21: [21, 14],
  // ...

  // Halbfinale
  // 27: [21, 14],
  // 28: [18, 21],
  // 29: [21, 10],

  // Platz 3 & Finale
  // 30: [21, 14],
  // 31: [21, 18],
};
