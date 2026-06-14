import { useContext } from "react"
import userContext from "../../contextos/UserContext"
import { useForm } from "react-hook-form"
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
function NuevaEvidenciaForm(props) {
    const user = useContext(userContext)
    const TAREA = {
        tarea_id: "tarea_id",
        estudiante_id: "estudiante_id",
        url: "url",
        descripcion: "descripcion",
        estado_validacion: "estado_validacion"
    }
    const TAREA_INICIAL = {
        tarea_id: props.tareaActual.id,
        estudiante_id: user,
        url: "",
        descripcion: "",
        estado_validacion: "pendiente"
    }
    const { register,
        handleSubmit,
        reset,
        formState: { errors },
        watch } = useForm({ defaultValues: TAREA_INICIAL });

    const manejarFormulario = handleSubmit((nuevaEvidencia) => {
        if(props.recibirEvidencia){
            props.recibirEvidencia(nuevaEvidencia)
        }
        reset(TAREA_INICIAL);
    })
    return (
        <>
            <form id="NuevaEvidenciaForm" onSubmit={manejarFormulario}>
                {/* Campo de texto de URL*/}
                <TextField
                    id={TAREA.url}
                    type="text"
                    label="URL"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    {...register(TAREA.url,
                        {
                            required: {
                                value: true,
                                message: "URL requerida"
                            },
                            pattern: {value: /^https?:\/\/.+\..+$/, 
                                      message: "URL inválida"}
                        })}
                    error={!!errors.url}
                    helperText={errors.url?.message} /><br />
                {/* Campo de texto de Descripción*/}
                <TextField
                    id={TAREA.descripcion}
                    type="text"
                    label="Observaciones"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    {...register(TAREA.descripcion,
                        {
                            required: {
                                value: true,
                                message: "Descripción requerida"
                            }
                        })}
                    error={!!errors.descripcion}
                    helperText={errors.descripcion?.message} /><br />
                <Button variant="contained" type="submit">Añadir nueva evidencia</Button>
            </form>
        </>
    )
}
export default NuevaEvidenciaForm