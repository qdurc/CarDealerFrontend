import "/src/App.css"
import { Routes, Route} from "react-router-dom"
import { Login } from './Pages/Login'
import { RouterApp } from './routes/RouterApp'
import { ProtectedRoutes } from "./routes/ProtectedRoutes"
import { AdminPanel } from "./Pages/AdminPanel"

function App() {
  return(
    <>

        <Routes>
          <Route path='/AdminPanel' element=
          {
            <ProtectedRoutes>
              <AdminPanel/>
            </ProtectedRoutes>
          }/>
          <Route path='/*' element={<RouterApp/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      
        
    </>
  )
}

export default App
