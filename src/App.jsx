import { useState } from 'react'
import './App.css'

//Componentes
import Cabecera from './componentes/Cabecera/Cabecera'
import Roles from './componentes/Roles/Roles'
import Dashboard from './componentes/Dashboard/Dashboard'

//Contextos
import TokenContext from './contextos/TokenContext'
import UserContext from './contextos/UserContext'

function App() {

  //variables
  let usuario = "Admin"
  let token = "abc123xyz456"
  let menu = "Inicio, Dashboard, Configuración"


  //Estados
  const [user, setUser] = useState(usuario)

  return (
    <>

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
                <Dashboard></Dashboard>
              </TokenContext.Provider>

            </div>
          </div>
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App
