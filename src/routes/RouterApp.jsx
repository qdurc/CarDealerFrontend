import React, { useEffect } from 'react'
import { Routes, Route} from "react-router-dom"
import { Navbar, 
    Footer,
    Contacto,
    Inventario,
    Portada,
    SobreNosotros,
} from "../utilities/index"

export const RouterApp = () => {

    useEffect(() => {
        localStorage.removeItem("user")
      }, [])

  return (
    <>
        <Navbar/>
            <Routes>

                <Route path='/' element={<Portada/>}/>
                <Route path='/Sobre Nosotros' element={<SobreNosotros/>}/>
                <Route path='/Inventario' element={<Inventario/>}/>
                <Route path='/Contacto' element={<Contacto/>}/>

            </Routes>
        <Footer/>

    </>
    
  )
}
