import React, { useState, useRef } from "react";
import { DiplomaTemplate } from "./components/features/diplomaTemplate/DiplomaTemplate";
import { MainLayout } from "./components/shared/mainLayout/MainLayout";
import { RightSideButtons } from "./components/features/rightSideButtons/RigthSideButtons";
import {
  gradeToNumber,
  numberToGrade,
} from "./components/shared/constants/Grades";
// import ReactToPrint from "react-to-print";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [formData, setFormData] = useState({
    schoolName: "",
    municipality: "",
    bookNum: "",
    year: "",
    grade: "",
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
    gradeNumber: "",
    subjects: Array.from({ length: 15 }, (_, index) => ({
      id: index,
      name: "",
      grade: "",
      gradeNumber: "",
    })),
  });

  const componentRef = useRef();
  const printRef = useRef();

  const onPrint = () => {
    if (printRef.current) {
      printRef.current.handlePrint();
    }
  };

  const onDelete = () => {
    console.log("On delete");
  };

  const onPageChange = () => {
    if (pageNumber === 1) {
      setPageNumber(2);
    } else {
      setPageNumber(1);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value }, () => {
      console.log(formData);
    });
  };

  const handleSubjectChange = (e, field, id) => {
    const { value } = e.target;

    setFormData((prevFormData) => {
      const updatedSubjects = prevFormData.subjects.map((subject) => {
        if (subject.id === id) {
          let updatedSubject = { ...subject, [field]: value };

          if (field === "grade" && gradeToNumber[value]) {
            updatedSubject.gradeNumber = gradeToNumber[value];
          } else if (field === "gradeNumber" && numberToGrade[value]) {
            updatedSubject.grade = numberToGrade[value];
          }

          return updatedSubject;
        }
        return subject;
      });

      return {
        ...prevFormData,
        subjects: updatedSubjects,
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
      {/* <ReactToPrint
        ref={printRef}
        trigger={() => null}
        content={() => componentRef.current}
      /> */}
    </MainLayout>
  );
}

export default App;
