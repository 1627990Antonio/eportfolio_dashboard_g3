import BASE_URL from './api';

export const obtenerTareasPorRA = async (ra) => {
    try {
        const response = await fetch(`${BASE_URL}/tareas?ra=${ra}`);
        if (!response.ok) throw new Error("Error fetching tareas");
        const data = await response.json();
        
        // Dependiendo de cómo configures tu API con los mocks:
        // Si devuelve directamente el array de tareas, usamos data.
        // Si devuelve el objeto completo del mock, usamos data.lista.
        if (data && data.lista) return data.lista;
        if (Array.isArray(data)) return data;
        
        return [];
    } catch (error) {
        console.error("Error en obtenerTareasPorRA:", error);
        return [];
    }
};
