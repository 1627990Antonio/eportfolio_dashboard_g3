import { useState, useEffect } from "react";
import { obtenerTareasPorRA } from "../servicios/tareasService";

function useTareasRA(ra) {
    const [buscando, setBuscando] = useState(true);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const cargarTareas = async () => {
            setBuscando(true);
            const tareas = await obtenerTareasPorRA(ra);
            setLista(tareas);
            setBuscando(false);
        };
        
        cargarTareas();
    }, [ra]);

    return { buscando, lista };
}

export default useTareasRA;
