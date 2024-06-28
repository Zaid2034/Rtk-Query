/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useAddStudentMutation } from "../features/studentSlice";
import { useNavigate } from "react-router-dom";

const Creator= () => {
  const [students,setStudents]=useState(Object)
  const [addStudent]=useAddStudentMutation()
  const navigate=useNavigate()
  const handleChange=(e)=>{
    console.log(students)
    setStudents({...students,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    await addStudent(students)
    navigate('/')
  }

  return (
    <div className="container mx-auto">
      <h2>{"Create Form"} </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            name="studentName"
            className="form-control"
            onChange={handleChange}
            value={students?.studentName || ""}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Student Email</label>
          <input
            type="email"
            name="studentEmail"
            className="form-control"
            onChange={handleChange}
            value={students?.studentEmail || ""}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {"Add "}
        </button>
      </form>
    </div>
  );
};

export default Creator;