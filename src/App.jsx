import { Navbar } from './components/Navbar'
import { Portada } from './Pages/Portada'
import "/src/App.css"
import { Footer } from './components/Footer'
import { Routes, Route } from "react-router-dom"
import { SobreNosotros } from './Pages/SobreNosotros'
import { Inventario } from './Pages/Inventario'
import { Contacto } from './Pages/Contacto'

function App() {
  return(
    <>

        <Navbar/>

        <Routes>
          <Route path='/Portada' element={<Portada/>}/>
          <Route path='/Sobre Nosotros' element={<SobreNosotros/>}/>
          <Route path='/Inventario' element={<Inventario/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
        </Routes>


        <Footer/>
        
    </>
  )
}

export default App
