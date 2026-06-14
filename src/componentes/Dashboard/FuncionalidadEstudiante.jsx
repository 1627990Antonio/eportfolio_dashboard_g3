import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import NuevaEvidencia from '../NuevaEvidencia/NuevaEvidencia';
import ProgresoCompletoAlumno from '../ProgresoCompletoAlumno/ProgresoCompletoAlumno';
import RevisionesPendientes from '../RevisionesPendientes/RevisionesPendientes';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

function FuncionalidadEstudiante() {
    const { modulo } = useParams();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>Funcionalidad Estudiante - Módulo: {modulo}</Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="tabs estudiante">
                    <Tab label="Mi progreso completo" />
                    <Tab label="Subir nueva evidencia" />
                    <Tab label="Mis revisiones pendientes" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <ProgresoCompletoAlumno />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <NuevaEvidencia />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <RevisionesPendientes />
            </CustomTabPanel>
        </Box>
    );
}

export default FuncionalidadEstudiante;
