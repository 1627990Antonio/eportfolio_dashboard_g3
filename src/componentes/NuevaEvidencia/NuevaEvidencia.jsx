import { useState } from "react"
import NuevaEvidenciaForm from "../NuevaEvidenciaForm/NuevaEvidenciaForm"
import SelectorTareaRA from "../SelectorTareaRA/SelectorTareaRA"

function NuevaEvidencia() {
    //Creo un estado para guardar la tarea seleccionada
    const [tareaActual, setTareaActual] = useState("");

    //Función que se pasa como prop al componente SelectorTareaRA
    function seleccionarTarea(tarea) {
        console.log("El padre recibió: ", tarea)
        setTareaActual(tarea);
    }
    return(
        <>
            <SelectorTareaRA seleccionarTarea={seleccionarTarea}></SelectorTareaRA> 
            <NuevaEvidenciaForm tareaActual={tareaActual}></NuevaEvidenciaForm>
        </>
    )
}

export default NuevaEvidencia