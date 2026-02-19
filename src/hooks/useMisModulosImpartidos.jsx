import { useState, useContext } from "react"
import userContext from "../contextos/UserContext"
import modulos from "../mocks/mock-matriculados"
function useMisModulosImpartidos(){
    const usuario = useContext(userContext)
    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState([])

    function obtenerModulos(usuario){
        setBuscando(true)

        const modulosUsuario = modulos.lista.filter(modulo = modulo.estudiante_id === usuario.id)
        setLista(modulosUsuario)
        
        setBuscando(false)
    }

    return {obtenerModulos}
}
export default useMisModulosImpartidos