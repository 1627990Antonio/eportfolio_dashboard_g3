import { useState } from "react";
import { insertarEvidencia } from "../servicios/evidenciasService";

function useInsertarEvidencia() {
    const [insertando, setInsertando] = useState(false);
    const [error, setError] = useState(null);
    const [exito, setExito] = useState(false);

    const guardarEvidencia = async (evidencia) => {
        setInsertando(true);
        setError(null);
        setExito(false);
        
        try {
            const data = await insertarEvidencia(evidencia);
            setExito(true);
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setInsertando(false);
        }
    };

    return { guardarEvidencia, insertando, error, exito };
}

export default useInsertarEvidencia;
