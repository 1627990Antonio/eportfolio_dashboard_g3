import { useState, useContext } from "react"
import userContext from "../contextos/UserContext"
import roles from "../mocks/mock-roles"
function useRoles(){
    const usuario = useContext(userContext)
    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState([])

    function obtenerRoles(usuario){
        setBuscando(true)

        const rolesUsuario = roles.lista.filter(rol = rol.estudiante_id === usuario.id)
        setLista(rolesUsuario)
        
        setBuscando(false)
    }

    return {obtenerRoles}
}
export default useRoles