/* eslint-disable no-unused-vars */
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const studentApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:'https://667e4bb2297972455f67c825.mockapi.io/api/v1/'
    }),
    tagTypes: ["Student"],
    endpoints:(builder)=>({
        getStudents:builder.query({
            query:()=> '/user',
            providesTags: ["Student"],
        }),
        getStudent:builder.query({
            query:(id)=> `/user/${id}`,
            providesTags: ["Student"],
        }),
        addStudent:builder.mutation({
            query:(student)=>({
                url:'/user',
                method:'POST',
                body:student
            }),
            invalidatesTags: ["Student"],
        }),
        deleteStudent:builder.mutation({
            query:(id)=>({
                url:`/user/${id}`,
                method:'DELETE',
            }),
            invalidatesTags: ["Student"],
        }),
        updateStudent:builder.mutation({
            query:({id,...rest})=>({
                url:`/user/${id}`,
                method:'PUT',
                body:rest
            }),
            invalidatesTags: ["Student"],
        })
    })
    
})
export const {useGetStudentsQuery,useAddStudentMutation,useDeleteStudentMutation,useGetStudentQuery,useUpdateStudentMutation}=studentApi
