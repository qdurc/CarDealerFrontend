import React from 'react'
import {Navigate} from "react-router-dom"

export const ProtectedRoutes = ({children}) => {

    const user = JSON.parse(localStorage.getItem('user')) || null

    if (user){
        return children
    }else{
        return <Navigate to="/login"/>
    }
    
}

