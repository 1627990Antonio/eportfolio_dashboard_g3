import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

import useRoles from '../../hooks/useRoles';
import useMisModulosImpartidos from '../../hooks/useMisModulosImpartidos';
import useMisModulosMatriculados from '../../hooks/useMisModulosMatriculados';
import opcionesMenu from '../../mocks/mock-administrador';

function MenuRoles() {
    const { lista: roles } = useRoles();
    const { lista: modulosImpartidos } = useMisModulosImpartidos();
    const { lista: modulosMatriculados } = useMisModulosMatriculados();

    return (
        <div>
            {roles.map((rol, index) => (
                <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{rol.charAt(0).toUpperCase() + rol.slice(1)}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            {rol === 'administrador' &&
                                opcionesMenu.administrador.map((opcion, i) => (
                                    <li key={i} style={{ marginBottom: '8px' }}>
                                        <Link to={opcion.ruta} style={{ textDecoration: 'none', color: '#1976d2' }}>
                                            {opcion.nombre}
                                        </Link>
                                    </li>
                                ))}
                            {rol === 'docente' &&
                                modulosImpartidos.map((modulo, i) => (
                                    <li key={i} style={{ marginBottom: '8px' }}>
                                        <Link to={`/funcionalidaddocente/${modulo.id}`} style={{ textDecoration: 'none', color: '#1976d2' }}>
                                            {modulo.nombre}
                                        </Link>
                                    </li>
                                ))}
                            {rol === 'estudiante' &&
                                modulosMatriculados.map((modulo, i) => (
                                    <li key={i} style={{ marginBottom: '8px' }}>
                                        <Link to={`/funcionalidadestudiante/${modulo.id}`} style={{ textDecoration: 'none', color: '#1976d2' }}>
                                            {modulo.nombre}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}

export default MenuRoles;
