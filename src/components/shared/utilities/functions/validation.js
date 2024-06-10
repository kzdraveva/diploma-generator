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
  ];

  for (const field of requiredFields) {
    console.log("data[field]", field, "-----", data[field]);
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
