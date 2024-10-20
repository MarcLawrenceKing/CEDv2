import React, { useState } from "react";
import Image from "./Image";
import img1 from "../assets/img1.jpg";
import Button from "./Button";
import { LuPlus, LuMonitor, LuPenSquare, LuTrash2 } from "react-icons/lu";
import LogoText from "./LogoText";
import { useLocation } from "react-router-dom";
import Display from "./Display";

const Table = () => {
  const [activeBtn, setActiveBtn] = useState(null); // to color the buttons blue when clicked
  const [selectedRows, setSelectedRows] = useState([]);

  const handleClick = (buttonId) => {
    setActiveBtn(buttonId);
  };

  const handleSelectedRowsChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
  };

  const location = useLocation();
  const { tableName } = location.state || {};

  const subjectColumns = [
    {
      name: "Subject Code",
      selector: (row) => row.SubjectCode,
      sortable: true,
      width: "15%",
    },
    {
      name: "Subject Title",
      selector: (row) => row.SubjectTitle,
      sortable: true,
      width: "40%",
    },
    {
      name: "Tuition Units",
      selector: (row) => row.TuitionUnits,
      sortable: true,
    },
    {
      name: "Credited Units",
      selector: (row) => row.CreditedUnits,
      sortable: true,
    },
  ];

  const scheduleColumns = [
    {
      name: "Schedule ID",
      selector: (row) => row.ScheduleID,
      sortable: true,
      width: "15%",
    },
    {
      name: "Subject Code",
      selector: (row) => row.SubjectCode,
      sortable: true,
      width: "15%",
    },
    {
      name: "Section Code",
      selector: (row) => row.SectionCode,
      sortable: true,
      width: "15%",
    },
    {
      name: "AY Term",
      selector: (row) => row.AYTerm,
      sortable: true,
      width: "25%",
    },
    {
      name: "Schedule",
      selector: (row) => row.Schedule,
      sortable: true,
    },
  ];

  const programColumns = [
    {
      name: "Program Code",
      selector: (row) => row.ProgramCode,
      sortable: true,
      width: "20%",
    },
    {
      name: "Program Description",
      selector: (row) => row.ProgramDescription,
      sortable: true,
    },
  ];

  const tuitionColumns = [
    {
      name: "Tuition ID",
      selector: (row) => row.TuitionID,
      sortable: true,
    },
    {
      name: "Student ID",
      selector: (row) => row.StudentID,
      sortable: true,
    },
    {
      name: "Student Name",
      selector: (row) => row.StudentName,
      sortable: true,
    },
    {
      name: "AY Term",
      selector: (row) => row.AYTerm,
      sortable: true,
    },
    {
      name: "Scholarship",
      selector: (row) => row.Scholarship,
      sortable: true,
    },
    {
      name: "Total Tuition Units",
      selector: (row) => row.TotalTuitionUnits,
      sortable: true,
    },
    {
      name: "Total Credited Units",
      selector: (row) => row.TotalCreditedUnits,
      sortable: true,
    },
    {
      name: "Tuition",
      selector: (row) => row.Tuition,
      sortable: true,
    },
    {
      name: "Total Fees",
      selector: (row) => row.TotalFees,
      sortable: true,
    },
    {
      name: "Total Assessment",
      selector: (row) => row.TotalAssessment,
      sortable: true,
    },
  ];

  const studentColumns = [
    {
      name: "Student ID",
      selector: (row) => row.StudentID,
      sortable: true,
    },
    {
      name: "Program Code",
      selector: (row) => row.ProgramCode,
      sortable: true,
    },
    {
      name: "Student Name",
      selector: (row) => row.StudentName,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.Address,
      sortable: true,
    },
    {
      name: "Contact Number",
      selector: (row) => row.ContactNumber,
      sortable: true,
    },
    {
      name: "Year Level",
      selector: (row) => row.YearLevel,
      sortable: true,
    },
    {
      name: "Section",
      selector: (row) => row.Section,
      sortable: true,
    },
    {
      name: "Campus",
      selector: (row) => row.Campus,
      sortable: true,
    },
  ];

  const enrollmentColumns = [
    {
      name: "Enrollment ID",
      selector: (row) => row.EnrollmentID,
      sortable: true,
    },
    {
      name: "Student ID",
      selector: (row) => row.StudentID,
      sortable: true,
    },
    {
      name: "Student Name",
      selector: (row) => row.StudentName,
      sortable: true,
    },
    {
      name: "Subject Code",
      selector: (row) => row.SubjectCode,
      sortable: true,
    },
    {
      name: "AY Term",
      selector: (row) => row.AYTerm,
      sortable: true,
    },
  ];

  return (
    <div className="bg-background grid grid-cols-[30%_70%]">
      <div className="h-[calc(100vh-96px)] flex flex-col gap-8 items-center justify-center">
        <Button
          isActive={activeBtn === 1}
          onClick={() => handleClick(1)}
          variant={"table"}
        >
          <LogoText
            variant={"table_options"}
            Icon={LuPlus}
            text={`ADD ${tableName}`}
            iconSize="32px"
          />
        </Button>
        <Button
          isActive={activeBtn === 2}
          onClick={() => handleClick(2)}
          variant={"table"}
        >
          <LogoText
            variant={"table_options"}
            Icon={LuMonitor}
            text={`DISPLAY ${tableName}`}
            iconSize="32px"
          />
        </Button>
        <Button
          isActive={activeBtn === 3}
          onClick={() => handleClick(3)}
          variant={"table"}
          disabled={selectedRows.length !== 1}
        >
          <LogoText
            variant={"table_options"}
            Icon={LuPenSquare}
            text={`EDIT ${tableName}`}
            iconSize="32px"
          />
        </Button>
        <Button
          isActive={activeBtn === 4}
          onClick={() => handleClick(4)}
          variant={"table"}
          disabled={selectedRows.length == 0}
        >
          <LogoText
            variant={"table_options"}
            Icon={LuTrash2}
            text={`DELETE ${tableName}`}
            iconSize="32px"
          />
        </Button>
      </div>
      <div className="relative h-[calc(100vh-96px)]">
        <Image
          src={img1}
          alt="Some Image"
          variant={"backgroundImage"}
          extraClass="w-full h-full"
        />

        <div className="absolute inset-0 flex items-center justify-center ">
          {activeBtn == null && (
            <p className="text-3xl text-pup-white bg-pup-blue rounded p-2 bg-opacity-70">
              Choose any of the options to continue...
            </p>
          )}
          {activeBtn == 2 && tableName == "SUBJECTS" && (
            <Display
              apiEndpoint="http://localhost:8081/api/subject"
              columns={subjectColumns}
              handleSelectedRowsChange={handleSelectedRowsChange}
            />
          )}
          {activeBtn == 2 && tableName == "SCHEDULES" && (
            <Display
              apiEndpoint="http://localhost:8081/api/schedule"
              columns={scheduleColumns}
              handleSelectedRowsChange={handleSelectedRowsChange}
            />
          )}
          {activeBtn == 2 && tableName == "PROGRAMS" && (
            <Display
              apiEndpoint="http://localhost:8081/api/program"
              columns={programColumns}
              handleSelectedRowsChange={handleSelectedRowsChange}
            />
          )}
          {activeBtn == 2 && tableName == "TUITIONS" && (
            <Display
              apiEndpoint="http://localhost:8081/api/tuition"
              columns={tuitionColumns}
              handleSelectedRowsChange={handleSelectedRowsChange}
            />
          )}
          {activeBtn == 2 && tableName == "STUDENTS" && (
            <Display
              apiEndpoint="http://localhost:8081/api/student"
              columns={studentColumns}
              handleSelectedRowsChange={handleSelectedRowsChange}
            />
          )}
          {activeBtn == 2 && tableName == "ENROLLMENTS" && (
            <Display
              apiEndpoint="http://localhost:8081/api/enrollment"
              columns={enrollmentColumns}
              handleSelectedRowsChange={handleSelectedRowsChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
