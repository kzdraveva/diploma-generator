export const Grades = [
  { value: "", label: "" },
  { value: "Odlicen", label: "Одличен" },
  { value: "Mnogu dobar", label: "Многу добар" },
  { value: "Dobar", label: "Добар" },
  { value: "Dovolen", label: "Доволен" },
  { value: "Nedovolen", label: "Недоволен" },
];

export const GradesNumber = [
  { value: "", label: "" },
  { value: "5", label: "5" },
  { value: "4", label: "4" },
  { value: "3", label: "3" },
  { value: "2", label: "2" },
  { value: "1", label: "1" },
];

export const gradeToNumber = {
  Odlicen: "5",
  "Mnogu dobar": "4",
  Dobar: "3",
  Dovolen: "2",
  Nedovolen: "1",
};

export const numberToGrade = {
  5: "Odlicen",
  4: "Mnogu dobar",
  3: "Dobar",
  2: "Dovolen",
  1: "Nedovolen",
};
