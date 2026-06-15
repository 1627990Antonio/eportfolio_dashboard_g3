import { useState, useEffect, useContext } from "react";
import UserContext from "../contextos/UserContext";
import { obtenerModulosImpartidos } from "../servicios/modulosService";

function useMisModulosImpartidos() {
    const usuario = useContext(UserContext);
    const [buscando, setBuscando] = useState(true);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const cargarModulos = async () => {
            setBuscando(true);
            const modulos = await obtenerModulosImpartidos(usuario);
            setLista(modulos);
            setBuscando(false);
        };
        
        cargarModulos();
    }, [usuario]);

    return { buscando, lista };
}

export default useMisModulosImpartidos;
