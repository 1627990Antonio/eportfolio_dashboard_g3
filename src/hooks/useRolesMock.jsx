import { useState, useContext } from "react"
import UserContext from "../contextos/UserContext"
import roles from "../mocks/mock-roles"

function useRoles(){
    const usuario = useContext(UserContext)
    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState(roles[usuario]?.roles || [])

    return {buscando, lista}
}
export default useRoles