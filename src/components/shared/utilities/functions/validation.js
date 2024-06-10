export const validateFormData = (data) => {
  const requiredFields = [
    "schoolName",
    "municipality",
    "bookNum",
    "year",
    "nameSurname",
    "fatherName",
    "birthYear",
    "birthPlace",
    "birthMunicipality",
    "country",
    "citizenship",
    "startSchoolYear",
    "endSchoolYear",
    "number",
    "schoolYear",
    "behaviorResult",
    "justifiedAbsences",
    "unjustifiedAbsences",
    "finalGrade",
    "delNum",
    "date",
    "actNum",
    "ministry",
    "fullYear",
  ];

  for (const field of requiredFields) {
    if (!data[field]) {
      return false;
    }
  }

  for (const subject of data.mandatorySubjects) {
    if (!subject.name || !subject.grade || !subject.gradeNumber) {
      return false;
    }
  }

  for (const subject of data.optionalSubjects) {
    if (!subject.name || !subject.grade || !subject.gradeNumber) {
      return false;
    }
  }

  return true;
};
