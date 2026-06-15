import { useState, useEffect, useContext } from "react";
import UserContext from "../contextos/UserContext";
import { obtenerModulosMatriculados } from "../servicios/modulosService";

function useMisModulosMatriculados() {
    const usuario = useContext(UserContext);
    const [buscando, setBuscando] = useState(true);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const cargarModulos = async () => {
            setBuscando(true);
            const modulos = await obtenerModulosMatriculados(usuario);
            setLista(modulos);
            setBuscando(false);
        };
        
        cargarModulos();
    }, [usuario]);

    return { buscando, lista };
}

export default useMisModulosMatriculados;
