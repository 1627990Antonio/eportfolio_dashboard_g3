import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Roles from './componentes/Roles/Roles'
import Dashboard from './componentes/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

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
            <Dashboard token={token}></Dashboard>  
          </div>
        </div>
      </div>
    </>
  )
}

export default App
