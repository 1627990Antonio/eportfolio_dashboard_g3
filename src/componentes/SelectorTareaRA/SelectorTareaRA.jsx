import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import tareasRA from '../../mocks/mock-tareasRA';


function SelectorTareaRA() {
  const [tarea, setTarea] = useState("");

  const handleChange = (event) => {
    setTarea(event.target.value);
  };

  function mostrarTareas(tarea){
    return <MenuItem key={tarea.id} value={tarea}>{tarea.observaciones}</MenuItem>
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tarea</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tarea}
          label="tarea"
          onChange={handleChange}        >
            {tareasRA.lista.map(mostrarTareas)}
        </Select>
      </FormControl>
    </Box>
  );
}
export default SelectorTareaRA