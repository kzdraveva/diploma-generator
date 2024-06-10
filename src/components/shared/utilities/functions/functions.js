import { gradeToNumber } from "../../constants/Grades";

export const calculateFinalGrade = (mandatorySubjects, optionalSubjects) => {
  const allSubjects = [...mandatorySubjects, ...optionalSubjects];

  // Convert grades to numbers and filter out undefined or invalid grades
  const grades = allSubjects
    .map((subject) => {
      const grade = gradeToNumber[subject.grade];
      return grade !== undefined ? parseFloat(grade) : null;
    })
    .filter((grade) => grade !== null);

  // Calculate the sum of the grades
  const sum = grades.reduce((acc, grade) => acc + grade, 0);

  // Calculate the average grade
  const average = grades.length ? (sum / grades.length).toFixed(2) : "";

  // Determine the description based on the average grade
  let description = "";
  if (average >= 1 && average < 1.5) {
    description = "Недоволен";
  } else if (average >= 1.5 && average < 2.5) {
    description = "Доволен";
  } else if (average >= 2.5 && average < 3.5) {
    description = "Добар";
  } else if (average >= 3.5 && average < 4.5) {
    description = "Многу добар";
  } else if (average >= 4.5 && average <= 5.0) {
    description = "Одличен";
  }

  return `${description} (${average})`;
};
