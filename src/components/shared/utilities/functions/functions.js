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

  // Calculate and return the average
  return grades.length ? (sum / grades.length).toFixed(2) : "";
};
