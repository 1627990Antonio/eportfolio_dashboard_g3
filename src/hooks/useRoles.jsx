import { useState, useEffect, useContext } from "react";
import UserContext from "../contextos/UserContext";
import { obtenerRoles } from "../servicios/rolesService";

function useRoles() {
    const usuario = useContext(UserContext);
    const [buscando, setBuscando] = useState(true);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const cargarRoles = async () => {
            setBuscando(true);
            const rolesDelServidor = await obtenerRoles(usuario);
            setLista(rolesDelServidor);
            setBuscando(false);
        };
        
        cargarRoles();
    }, [usuario]);

    return { buscando, lista };
}

export default useRoles;
