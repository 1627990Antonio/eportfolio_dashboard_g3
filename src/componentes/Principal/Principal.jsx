import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useRoles from '../../hooks/useRoles';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import Dashboard from '../Dashboard/Dashboard';
import FuncionalidadDocente from '../Dashboard/FuncionalidadDocente';
import FuncionalidadEstudiante from '../Dashboard/FuncionalidadEstudiante';
import PaginaFamiliasProfesionales from '../Dashboard/PaginaFamiliasProfesionales';

function Principal() {
    const { buscando, lista: roles } = useRoles();

    if (buscando) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Routes>
            {/* Ruta abierta para todos */}
            <Route path="/" element={<Dashboard />} />
            
            {/* Rutas condicionales por rol */}
            {roles.includes('docente') && (
                <Route path="/funcionalidaddocente/:modulo" element={<FuncionalidadDocente />} />
            )}
            
            {roles.includes('estudiante') && (
                <Route path="/funcionalidadestudiante/:modulo" element={<FuncionalidadEstudiante />} />
            )}
            
            {roles.includes('administrador') && (
                <Route path="/familiasprofesionales" element={<PaginaFamiliasProfesionales />} />
            )}
        </Routes>
    );
}

export default Principal;
