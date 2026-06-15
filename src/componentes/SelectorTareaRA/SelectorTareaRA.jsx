import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useTareasRA from '../../hooks/useTareasRA';

function SelectorTareaRA(props) {
  const [tarea, setTarea] = useState("");
  const { lista: tareasRA, buscando } = useTareasRA('RA1');

  const handleChange = (event) => {
    const tareaSeleccionada = event.target.value;

    setTarea(tareaSeleccionada);

    if(props.seleccionarTarea){
      props.seleccionarTarea(tareaSeleccionada)
    }
  };

  function mostrarTareas(tarea){
    return <MenuItem key={tarea.id} value={tarea}>{tarea.observaciones || tarea.nombre || `Tarea ${tarea.id}`}</MenuItem>
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth disabled={buscando}>
        <InputLabel id="demo-simple-select-label">Tarea</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tarea}
          label="tarea"
          onChange={handleChange}>
            {tareasRA && tareasRA.length > 0 
                ? tareasRA.map(mostrarTareas) 
                : <MenuItem value=""><em>Sin tareas</em></MenuItem>}
        </Select>
      </FormControl>
    </Box>
  );
}
export default SelectorTareaRA