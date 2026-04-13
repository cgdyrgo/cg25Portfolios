export interface Student {
  name: string;
  foto: string;
  bild1: string;
  bild2: string;
  showreel: string;
  bio: string;
  portfolioLink: string;
}

const STUDENT_NAMES = [
  "Alice Bergström", "Björn Carlsson", "Clara Dahlgren", "David Ekström",
  "Elsa Forsberg", "Filip Granlund", "Greta Hedlund", "Hugo Isaksson",
  "Ida Johansson", "Jakob Karlsson", "Klara Lindberg", "Leo Magnusson",
  "Maja Nilsson", "Nils Olsson", "Olivia Pettersson", "Oscar Qvist",
  "Petra Rosén", "Rasmus Sandberg", "Sara Thornberg", "Theodor Ulvskog",
  "Ulla Vikström", "Viktor Wahlström", "Wilma Xerxes", "Xander Yngve",
  "Ylva Zetterberg", "Zara Åström"
];

// Placeholder image using a deterministic color based on index
const placeholderImg = (name: string, variant: string) =>
  `https://placehold.co/300x400/1a1a1a/444?text=${encodeURIComponent(variant)}`;

const placeholderVideo = "";

export const students: Student[] = STUDENT_NAMES.map((name) => ({
  name,
  foto: placeholderImg(name, name.split(" ")[0]),
  bild1: placeholderImg(name, "Bild 1"),
  bild2: placeholderImg(name, "Bild 2"),
  showreel: placeholderVideo,
  bio: `${name} is a creative student specializing in visual design and motion graphics. With a passion for storytelling through digital media, they bring unique perspectives to every project.`,
  portfolioLink: "https://example.com",
}));

// Grid layout: 5 columns × 6 rows = 30 cells
// Logo occupies cells at row 3, columns 1-4 (0-indexed: row 2, cols 0-3)
// That's indices 10, 11, 12, 13 in a flat array
export const GRID_COLS = 5;
export const GRID_ROWS = 6;
export const LOGO_START_INDEX = 10; // row 3 (0-indexed row 2), col 1 (0-indexed col 0)
export const LOGO_CELL_COUNT = 4;

export type CellType = { type: "student"; student: Student; index: number } | { type: "logo" } | { type: "empty" };

export function getGridCells(): CellType[] {
  const cells: CellType[] = [];
  let studentIdx = 0;

  for (let i = 0; i < GRID_COLS * GRID_ROWS; i++) {
    if (i === LOGO_START_INDEX) {
      cells.push({ type: "logo" });
    } else if (i > LOGO_START_INDEX && i < LOGO_START_INDEX + LOGO_CELL_COUNT) {
      // These cells are spanned by the logo, skip
      continue;
    } else if (studentIdx < students.length) {
      cells.push({ type: "student", student: students[studentIdx], index: studentIdx });
      studentIdx++;
    } else {
      cells.push({ type: "empty" });
    }
  }

  return cells;
}
