import BASE_URL from './api';

export const insertarEvidencia = async (evidencia) => {
    try {
        const response = await fetch(`${BASE_URL}/evidencias`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(evidencia)
        });
        
        if (!response.ok) throw new Error("Error insertando evidencia");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en insertarEvidencia:", error);
        throw error;
    }
};
