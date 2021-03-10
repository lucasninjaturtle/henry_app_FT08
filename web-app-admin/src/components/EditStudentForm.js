import axios from 'axios';
import React, { useState } from 'react'
import CardStudents from "./CardStudent"
import AsyncSelect from "react-select/async"

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid red',
    padding: 5,
  }),

}

function EditStudentForm() {

    const [query, setQuery] = useState("")
    const [student, setStudent] = useState({
      name:"",
      lastName:"",
      github:"",
      group:"",
      cohort:"",
      instructor:"",
      module:"",
      projectMangers:[],
      startDay:""      
    })
    const [isClearable, setIsClearable] = useState(true)
  

    const handleInputChange = (newValue) => {
        const query = newValue.replace(/\W/g, '');
        setQuery( query );
        return query;
      };
      const loadOptions = (_,cb) => {
            return axios.get(`http://localhost:5000/student/search?name=${query}`)
              .then((res) => {
                // console.log(res)
                // console.log(res.data.map(student => student.name + " " + student.lastName))
                cb(res.data.map(user => ({
                  value: user.student.id,
                  label: user.name + " " + user.lastName
                  }
                )))
              }
              )
         };

         const handleOnChange = (value, { action }) => {
           
          if (action === 'select-option') {
            console.log(value.value)
            
            axios.get(`http://localhost:5000/user/student/${value.value}`)
            .then(resp =>{
              console.log(resp.data)
              setStudent({
                name:resp.data.name,
                lastName:resp.data.lastName,
                instructor:resp.data.instructor,
                cohort:resp.data.cohort,
                group:resp.data.group,
                github:resp.data.github,
                projectMangers:resp.data.projectMangers,
                startDay:resp.data.startDay
              })
             })
             .catch(e =>{
               console.log(e)
             })
          }
          // setStudents(students.name=value.label)
          // console.log(students)
        }
    return (
      <div>
        <div style={{marginTop:'40px'}}>

        <AsyncSelect
        styles={customStyles}
        cacheOptions        
        isClearable={isClearable}
        onInputChange={handleInputChange}
        loadOptions={loadOptions}
        onChange={handleOnChange}
        />
        </div>
        <CardStudents data={student}/>
        
        </div>
    )
}

export default EditStudentForm
