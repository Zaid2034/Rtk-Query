/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useGetStudentQuery,useAddStudentMutation, useUpdateStudentMutation } from '../features/studentSlice'
import { useEffect } from 'react'

export const AddEdit = () => {
    const [students,setStudents]=useState(Object)
    const navigate=useNavigate()
    const [updateStudent]=useUpdateStudentMutation()
    const {id}=useParams()
    const {data}=useGetStudentQuery(id)
    console.log(data)
    const handleChange=(e)=>{
        console.log(students)
        setStudents({...students,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        await updateStudent(students)
        navigate('/')
    }
    useEffect(()=>{
        console.log('In useEffect')
        setStudents({...data})
        console.log(students)

    },[data])
    
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
            {"Update "}
            </button>
        </form>
        </div>
    );
}
