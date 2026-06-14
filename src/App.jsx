import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//Componentes
import Cabecera from './componentes/Cabecera/Cabecera'
import Roles from './componentes/Roles/Roles'
import Dashboard from './componentes/Dashboard/Dashboard'
import FuncionalidadDocente from './componentes/Dashboard/FuncionalidadDocente'
import FuncionalidadEstudiante from './componentes/Dashboard/FuncionalidadEstudiante'

//Contextos
import TokenContext from './contextos/TokenContext'
import UserContext from './contextos/UserContext'

function App() {

  //variables
  let usuario = "Alberto"
  let token = "abc123xyz456"
  let menu = "Inicio, Dashboard, Configuración"

  //Estados
  const [user, setUser] = useState(usuario)

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 fondoCabecera">
            <Cabecera user={user}></Cabecera>
          </div>
        </div>
        <UserContext.Provider value={user}>
          <div className="row">
            <div className="col-2 fondoRoles">
              <Roles menu={menu}></Roles>
            </div>
            <div className="col-10 fondoDashboard">
              <TokenContext.Provider value={token}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/funcionalidaddocente/:modulo" element={<FuncionalidadDocente />} />
                  <Route path="/funcionalidadestudiante/:modulo" element={<FuncionalidadEstudiante />} />
                </Routes>
              </TokenContext.Provider>
            </div>
          </div>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  )
}

export default App
