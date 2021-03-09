import React, { useState } from 'react'
import AsyncSelect from "react-select/async"

function EditStudentForm() {

    const [data, setData] = useState({
        name:''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setData({[name]: value })
    }
    console.log(data.name)
    return (
        <AsyncSelect />
    )
}

export default EditStudentForm
