import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

//Componentes
import Cabecera from './componentes/Cabecera/Cabecera'
import Roles from './componentes/Roles/Roles'
import Principal from './componentes/Principal/Principal'

//Contextos
import TokenContext from './contextos/TokenContext'
import UserContext from './contextos/UserContext'

function App() {

  //variables
  let usuario = "Victor"
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
                <Principal />
              </TokenContext.Provider>
            </div>
          </div>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  )
}

export default App
