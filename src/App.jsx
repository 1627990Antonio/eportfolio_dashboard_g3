import { useState } from 'react'
import './App.css'

//Componentes
import Cabecera from './componentes/Cabecera/Cabecera'
import Roles from './componentes/Roles/Roles'
import Dashboard from './componentes/Dashboard/Dashboard'

//Contextos
import TokenContext from './contextos/TokenContext'

function App() {

  let usuario = "Admin"
  let token = "abc123xyz456"
  let menu = "Inicio, Dashboard, Configuración"
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 fondoCabecera">
            <Cabecera usuario={usuario}></Cabecera>
          </div>
        </div>
        <div className="row">
          <div className="col-2 fondoRoles">
            <Roles menu={menu}></Roles>
          </div>
          <div className="col-10 fondoDashboard">
            <TokenContext.Provider value={token}>
              <Dashboard></Dashboard>  
            </TokenContext.Provider>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
