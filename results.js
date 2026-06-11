// ── CORNHOLE TURNIER CONFIG ───────────────────────────────────────────────────
// Diese Datei ist die einzige die für das Turnier gepflegt werden muss.
// data.js und app.js müssen nicht angefasst werden.
//
// Reihenfolge der Abschnitte:
//   1. TEAMS          – Teamnamen und Gruppenzuordnung
//   2. MATCHES        – Spielplan (Zeiten, Felder, Runden)
//   3. PAARUNGEN      – Welche Teams spielen in welchem Match
//   4. ERGEBNISSE     – Eingetragene Spielergebnisse


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


// ── MATCHES ───────────────────────────────────────────────────────────────────
// Spielplan: Runden, Felder und Uhrzeiten.
// team1/team2 und score1/score2 werden automatisch aus PAARUNGEN und ERGEBNISSE befüllt.

const CORNHOLE_MATCHES_CONFIG = [
  // ── Gruppenphase A – Feld 1 ───────────────────────────────────────────────
  { id:  1, round: "Gruppenphase", group: "A", field: 1, time: "16:00" },
  { id:  2, round: "Gruppenphase", group: "A", field: 1, time: "16:20" },
  { id:  3, round: "Gruppenphase", group: "A", field: 1, time: "16:40" },
  { id:  4, round: "Gruppenphase", group: "A", field: 1, time: "17:00" },
  { id:  5, round: "Gruppenphase", group: "A", field: 1, time: "17:20" },
  { id:  6, round: "Gruppenphase", group: "A", field: 1, time: "17:40" },
  { id:  7, round: "Gruppenphase", group: "A", field: 1, time: "18:00" },
  { id:  8, round: "Gruppenphase", group: "A", field: 1, time: "18:20" },
  { id:  9, round: "Gruppenphase", group: "A", field: 1, time: "18:40" },
  { id: 10, round: "Gruppenphase", group: "A", field: 1, time: "19:00" },
  // ── Gruppenphase B – Feld 2 ───────────────────────────────────────────────
  { id: 11, round: "Gruppenphase", group: "B", field: 2, time: "16:00" },
  { id: 12, round: "Gruppenphase", group: "B", field: 2, time: "16:20" },
  { id: 13, round: "Gruppenphase", group: "B", field: 2, time: "16:40" },
  { id: 14, round: "Gruppenphase", group: "B", field: 2, time: "17:00" },
  { id: 15, round: "Gruppenphase", group: "B", field: 2, time: "17:20" },
  { id: 16, round: "Gruppenphase", group: "B", field: 2, time: "17:40" },
  { id: 17, round: "Gruppenphase", group: "B", field: 2, time: "18:00" },
  { id: 18, round: "Gruppenphase", group: "B", field: 2, time: "18:20" },
  { id: 19, round: "Gruppenphase", group: "B", field: 2, time: "18:40" },
  { id: 20, round: "Gruppenphase", group: "B", field: 2, time: "19:00" },
  // ── Gruppenphase C – Feld 3 ───────────────────────────────────────────────
  { id: 21, round: "Gruppenphase", group: "C", field: 3, time: "16:00" },
  { id: 22, round: "Gruppenphase", group: "C", field: 3, time: "16:20" },
  { id: 23, round: "Gruppenphase", group: "C", field: 3, time: "16:40" },
  { id: 24, round: "Gruppenphase", group: "C", field: 3, time: "17:00" },
  { id: 25, round: "Gruppenphase", group: "C", field: 3, time: "17:20" },
  { id: 26, round: "Gruppenphase", group: "C", field: 3, time: "17:40" },
  // ── Halbfinale (19:30) ────────────────────────────────────────────────────
  { id: 27, round: "Halbfinale", group: null, field: 1, time: "19:30", label1: "1. Gruppe A",    label2: "2. Gruppe B"     },
  { id: 28, round: "Halbfinale", group: null, field: 2, time: "19:30", label1: "1. Gruppe B",    label2: "Bester 2. Platz" },
  { id: 29, round: "Halbfinale", group: null, field: 3, time: "19:30", label1: "1. Gruppe C",    label2: "2. Gruppe A"     },
  // ── Platz 3 & Finale (20:00) ──────────────────────────────────────────────
  { id: 30, round: "Platz 3", group: null, field: 1, time: "20:00", label1: "Verlierer HF 1", label2: "Verlierer HF 2" },
  { id: 31, round: "Finale",  group: null, field: 2, time: "20:00", label1: "Sieger HF 1",    label2: "Sieger HF 2"    },
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
