import { useState, useContext } from "react"
import UserContext from "../contextos/UserContext"
import impartidos from "../mocks/mock-impartidos"

function useMisModulosImpartidos(){
    const usuario = useContext(UserContext)
    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState(impartidos[usuario]?.lista || [])

    return {buscando, lista}
}
export default useMisModulosImpartidos