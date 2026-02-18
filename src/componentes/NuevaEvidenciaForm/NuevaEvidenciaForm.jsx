import { useContext } from "react"
import userContext from "../../contextos/UserContext"
import { useForm } from "react-hook-form"
function NuevaEvidenciaForm(props) {
    const usuario = useContext(userContext)
    const TAREA = {
        tarea_id: "tarea_id",
        estudiante_id: "estudiante_id",
        url: "url",
        descripcion: "descripcion",
        estado_validacion: "estado_validacion"
    }
    const TAREA_INICIAL = {
        tarea_id: "tarea_id",
        estudiante_id: "estudiante_id",
        url: "",
        descripcion: "",
        estado_validacion: ""
    }
    const {register, 
           handleSubmit,
           reset,
           formState: { errors },
           watch} = useForm({defaultValues: TAREA_INICIAL});
        
    console.log(errors);

    const manejarFormulario = handleSubmit((nuevaEvidencia) => {
        console.log(nuevaEvidencia);
        reset(TAREA_INICIAL);
    })
    return (
        <>
            <form id="NuevaEvidenciaForm" onSubmit={manejarFormulario}>
                <label htmlFor={TAREA.url}>URL</label>
                <input id={TAREA.url} type="text" {...register(TAREA.url, 
                                                    {required: {value: true, 
                                                                message: "URL requerida"}, 
                                                     pattern: /^https?:\/\/.+\..+$/})} /><br />
                <span>{errors.url?.message}</span>
                <label htmlFor={TAREA.descripcion}>Observaciones</label>
                <input id={TAREA.descripcion} type="text" {...register(TAREA.descripcion, 
                                                    {required: {value: true, 
                                                                message: "Descripción requerida"}})} /><br />
                <span>{errors.descripcion?.message}</span>
                <button>Añadir nueva evidencia</button>
            </form>
        </>
    )
}
export default NuevaEvidenciaForm