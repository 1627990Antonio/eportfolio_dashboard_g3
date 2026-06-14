import { useState, useContext } from "react"
import UserContext from "../contextos/UserContext"
import modulosMatriculados from "../mocks/mock-matriculados"

function useMisModulosMatriculados(){
    const usuario = useContext(UserContext)
    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState(modulosMatriculados[usuario]?.lista || [])

    return {buscando, lista}
}
export default useMisModulosMatriculados
