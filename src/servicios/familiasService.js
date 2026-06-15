import BASE_URL from './api';

export const obtenerFamilias = async () => {
    try {
        const response = await fetch(`${BASE_URL}/familiasProfesionales`);
        if (!response.ok) throw new Error("Error fetching familias profesionales");
        const data = await response.json();
        
        if (data && data.lista) return data.lista;
        if (Array.isArray(data)) return data;
        
        return [];
    } catch (error) {
        console.error("Error en obtenerFamilias:", error);
        return [];
    }
};
