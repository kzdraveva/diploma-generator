import React, { useState, useRef } from "react";
import { DiplomaTemplate } from "./components/features/diplomaTemplate/DiplomaTemplate";
import { MainLayout } from "./components/shared/mainLayout/MainLayout";
import { RightSideButtons } from "./components/features/rightSideButtons/RigthSideButtons";
import {
  gradeToNumber,
  numberToGrade,
} from "./components/shared/constants/Grades";
import { calculateFinalGrade } from "./components/shared/utilities/functions/functions";
import { validateFormData } from "./components/shared/utilities/functions/validation";
import ReactToPrint from "react-to-print";

const initialFormData = {
  schoolName: "",
  municipality: "",
  bookNum: "",
  year: "",
  nameSurname: "",
  fatherName: "",
  birthYear: "",
  birthPlace: "",
  birthMunicipality: "",
  country: "",
  citizenship: "",
  startSchoolYear: "",
  endSchoolYear: "",
  number: "",
  schoolYear: "",
  behaviorResult: "",
  justifiedaAbsences: "",
  unjustifiedAbsences: "",
  finalGrade: "",
  delNum: "",
  date: "",
  actNum: "",
  ministry: "",
  mandatorySubjects: Array.from({ length: 17 }, (_, index) => ({
    id: index,
    name: "",
    grade: "",
    gradeNumber: "",
  })),
  optionalSubjects: Array.from({ length: 4 }, (_, index) => ({
    id: index,
    name: "",
    grade: "",
    gradeNumber: "",
  })),
};

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const componentRef = useRef();
  const printRef = useRef();

  const onPrint = () => {
    if (validateFormData(formData)) {
      if (printRef.current) {
        printRef.current.handlePrint();
      }
    } else {
      alert(
        "Доколку сакате да го испечатите вашето свидетелство, вe молиме пополнете ги празните полиња. "
      );
    }
  };

  const onDelete = () => {
    setFormData(initialFormData);
  };

  const onPageChange = () => {
    if (pageNumber === 1) {
      setPageNumber(2);
    } else {
      setPageNumber(1);
    }
  };

  const handleChange = (event, name) => {
    const value = event.target ? event.target.value : event;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name || event.target.name]: value,
    }));
  };

  const handleSubjectChange = (e, field, id, isOptional = false) => {
    const { value } = e.target;

    setFormData((prevFormData) => {
      const subjectsKey = isOptional ? "optionalSubjects" : "mandatorySubjects";
      const updatedSubjects = prevFormData[subjectsKey].map((subject) => {
        if (subject.id === id) {
          let updatedSubject = { ...subject, [field]: value };

          if (field === "grade" && gradeToNumber[value] !== undefined) {
            updatedSubject.gradeNumber = gradeToNumber[value];
          } else if (
            field === "gradeNumber" &&
            numberToGrade[value] !== undefined
          ) {
            updatedSubject.grade = numberToGrade[value];
          }

          return updatedSubject;
        }
        return subject;
      });

      const finalGrade = calculateFinalGrade(
        subjectsKey === "mandatorySubjects"
          ? updatedSubjects
          : prevFormData.mandatorySubjects,
        subjectsKey === "optionalSubjects"
          ? updatedSubjects
          : prevFormData.optionalSubjects
      );

      return {
        ...prevFormData,
        [subjectsKey]: updatedSubjects,
        finalGrade,
      };
    });
  };

  return (
    <MainLayout>
      <DiplomaTemplate
        pageNumber={pageNumber}
        formData={formData}
        ref={componentRef}
        handleChange={handleChange}
        handleSubjectChange={handleSubjectChange}
      />
      <RightSideButtons
        pageNumber={pageNumber}
        onPrint={onPrint}
        onDelete={onDelete}
        onPageChange={onPageChange}
      />
      <ReactToPrint ref={printRef} content={() => componentRef.current} />
    </MainLayout>
  );
}

export default App;
