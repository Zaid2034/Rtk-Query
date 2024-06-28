/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { useGetStudentsQuery } from "../features/studentSlice";
import { useDeleteStudentMutation } from "../features/studentSlice";
export function Read(){
    const { data,isSuccess,isError,error,isLoading} = useGetStudentsQuery();
    const [deleteStudent]=useDeleteStudentMutation()
    return (
        <div className="container mx-auto">
            <h2>Read Operation</h2>
            <div className="row">
            {isLoading && <span>Loading....</span>}
            {isError && <span>Something went wrong</span>}
            {isSuccess &&
                data?.map((student) => (
                    <div key={student?.id} className="col-3">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">{student?.studentName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            {student?.studentEmail}
                        </h6>
                        <button onClick={()=>{deleteStudent(student.id)}}>Delete</button>
                        <button><NavLink to={`edit/${student?.id}`}>Edit</NavLink></button>
                        </div>
                    </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

