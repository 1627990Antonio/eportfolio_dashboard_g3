import BASE_URL from './api';

export const obtenerModulosImpartidos = async (usuario) => {
    try {
        const response = await fetch(`${BASE_URL}/impartidos`);
        if (!response.ok) throw new Error("Error fetching impartidos");
        const data = await response.json();
        
        if (data && data[usuario]) {
            return data[usuario].lista || [];
        }
        return [];
    } catch (error) {
        console.error("Error en obtenerModulosImpartidos:", error);
        return [];
    }
};

export const obtenerModulosMatriculados = async (usuario) => {
    try {
        const response = await fetch(`${BASE_URL}/matriculados`);
        if (!response.ok) throw new Error("Error fetching matriculados");
        const data = await response.json();
        
        if (data && data[usuario]) {
            return data[usuario].lista || [];
        }
        return [];
    } catch (error) {
        console.error("Error en obtenerModulosMatriculados:", error);
        return [];
    }
};
