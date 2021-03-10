import axios from 'axios';
import React, { useState } from 'react'
import AsyncSelect from "react-select/async"

function EditStudentForm() {

    const [query, setQuery] = useState("")
    const [students, setStudents] = useState({
      name:"",
      lastName:""
    })
    const [isClearable, setIsClearable] = useState(true)
    // const toggleClearable = () =>{

    //   setIsClearable(!isClearable)
    //   setStudents({
    //     name:"",
    //     lastName:""
    //   })
    // }
    

    const handleInputChange = (newValue) => {
        const query = newValue.replace(/\W/g, '');
        setQuery( query );
        return query;
      };
      const loadOptions = (_,cb) => {
            return axios.get(`http://localhost:5000/student/search?name=${query}`)
              .then((res) => {
                // console.log(res.data.map(student => student.name + " " + student.lastName))
                cb(res.data.map(student => ({
                  value: student.id,
                  label: student.name + " " + student.lastName
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
              console.log(resp)
             })
          }
          // setStudents(students.name=value.label)
          // console.log(students)
        }
    // console.log(query)
    return (
      <div>

        <AsyncSelect
        cacheOptions
        
        isClearable={isClearable}
        onInputChange={handleInputChange}
        loadOptions={loadOptions}
        onChange={handleOnChange}
        />
        
        </div>
    )
}

export default EditStudentForm
