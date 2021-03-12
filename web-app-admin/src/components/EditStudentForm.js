import axios from "axios";
import React, { useState } from "react";
import CardStudents from "./CardStudent";
import AsyncSelect from "react-select/async";
import logohenry from "../logo_henry.png";
import { Link } from "react-router-dom";
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid red",
    padding: 5
  }),
  control: (base) => ({
    ...base,
    width: "300px"
  }),
  menu: (styles) => ({
    ...styles,
    width: "300px"
  })
};

function EditStudentForm() {
  const [query, setQuery] = useState("");
  const [student, setStudent] = useState({
    id: "",
    name: "",
    lastName: "",
    github: "",
    email: "",
    cellphone: "",
    group: "",
    cohortId: "",
    instructor: "",
    module: "",
    projectManagers: [],
    startDay: ""
  });
  const [isClearable, setIsClearable] = useState(true);

  const handleInputChange = (newValue) => {
    const query = newValue.replace(/\W/g, "");
    setQuery(query);
    return query;
  };
  const loadOptions = (_, cb) => {
    return axios
      .get(`http://localhost:5000/student/search?name=${query}`)
      .then((res) => {
        cb(
          res.data.map((user) => ({
            value: user.student.id,
            label: user.name + " " + user.lastName
          }))
        );
      });
  };

  const handleOnChange = (value, { action }) => {
    if (action === "select-option") {
      axios
        .get(`http://localhost:5000/user/student/${value.value}`)
        .then((resp) => {
          const instructor = resp.data.instructor
            ? resp.data.instructor.firstName +
              " " +
              resp.data.instructor.lastName
            : null;

          setStudent({
            id: value.value,
            name: resp.data.name,
            lastName: resp.data.lastName,
            email: resp.data.email,
            cellphone: resp.data.cellphone,
            instructor,
            cohortId: resp.data.cohort,
            groupId: resp.data.group,
            github: resp.data.github,
            projectManagers: resp.data.projectManagers,
            startDay: resp.data.startDay
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
    // setStudents(students.name=value.label)
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full h-20  flex flex-row justify-between">
        <img src={logohenry} className="w-20 ml-5" />
        <Link to="/manager" className="text-4xl  ">
          {" "}
          Home
        </Link>
        <Link to="/load-data/estudiantes" className="  text-4xl">
          {" "}
          Crear
        </Link>
        <Link to="/delete/students" className="text-4xl  mr-5">
          {" "}
          Eliminar
        </Link>
      </div>
      <div className="mt-20 mb-5 flex justify-center">
        <AsyncSelect
          styles={customStyles}
          cacheOptions
          isClearable={isClearable}
          onInputChange={handleInputChange}
          loadOptions={loadOptions}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex justify-center">
        <CardStudents data={student} />
      </div>
    </div>
  );
}

export default EditStudentForm;
