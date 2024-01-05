import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
    var {id,name,salary}=useParams()
    return (
    <>
        <h1>This is Profile Page</h1>

        <h2>ID: {id}</h2>
        <h2>Name: {name}</h2>
        <h2>Salary: {salary}</h2>
        </>
       
    )
    }  