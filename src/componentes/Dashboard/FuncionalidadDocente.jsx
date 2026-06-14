import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PlanificarCriterios from '../PlanificarCriterios/PlanificarCriterios';
import EvaluarEvidencias from '../EvaluarEvidencias/EvaluarEvidencias';
import AsignarRevisiones from '../AsignarRevisiones/AsignarRevisiones';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-docente-${index}`}
            aria-labelledby={`simple-tab-docente-${index}`}
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

function FuncionalidadDocente() {
    const { modulo } = useParams();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>Funcionalidad Docente - Módulo: {modulo}</Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="tabs docente">
                    <Tab label="Planificar criterios" />
                    <Tab label="Evaluar evidencias" />
                    <Tab label="Asignar revisiones" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <PlanificarCriterios />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <EvaluarEvidencias />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <AsignarRevisiones />
            </CustomTabPanel>
        </Box>
    );
}

export default FuncionalidadDocente;
