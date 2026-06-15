import { useState, useEffect } from "react";
import { obtenerFamilias } from "../servicios/familiasService";

function useFamiliasProfesionales() {
    const [buscando, setBuscando] = useState(true);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const cargarFamilias = async () => {
            setBuscando(true);
            const familias = await obtenerFamilias();
            setLista(familias);
            setBuscando(false);
        };
        
        cargarFamilias();
    }, []);

    return { buscando, lista };
}

export default useFamiliasProfesionales;
