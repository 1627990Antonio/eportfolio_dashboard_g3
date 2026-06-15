import BASE_URL from './api';

export const obtenerRoles = async (usuario) => {
    try {
        const response = await fetch(`${BASE_URL}/roles`);
        if (!response.ok) throw new Error("Error fetching roles");
        const data = await response.json();
        
        // Dependiendo de cómo esté montado el json-server,
        // devolvemos la lista de roles del usuario.
        if (data && data[usuario]) {
            return data[usuario].roles || [];
        }
        return [];
    } catch (error) {
        console.error("Error en obtenerRoles:", error);
        return [];
    }
};
