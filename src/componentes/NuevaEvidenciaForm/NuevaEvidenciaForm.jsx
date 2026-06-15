import { useContext } from "react"
import UserContext from "../../contextos/UserContext"
import { useForm } from "react-hook-form"
import { TextField, Button, Alert } from "@mui/material"
import useInsertarEvidencia from "../../hooks/useInsertarEvidencia"

function NuevaEvidenciaForm(props) {
    const user = useContext(UserContext)
    const { guardarEvidencia, insertando, error, exito } = useInsertarEvidencia()
    
    const TAREA = {
        tarea_id: "tarea_id",
        estudiante_id: "estudiante_id",
        url: "url",
        descripcion: "descripcion",
        estado_validacion: "estado_validacion"
    }
    const TAREA_INICIAL = {
        tarea_id: props.tareaActual ? props.tareaActual.id : "",
        estudiante_id: user,
        url: "",
        descripcion: "",
        estado_validacion: "pendiente"
    }
    const { register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm({ defaultValues: TAREA_INICIAL });

    const manejarFormulario = handleSubmit(async (nuevaEvidencia) => {
        try {
            await guardarEvidencia(nuevaEvidencia)
            if(props.recibirEvidencia){
                props.recibirEvidencia(nuevaEvidencia)
            }
            reset(TAREA_INICIAL);
        } catch (e) {
            console.error(e)
        }
    })
    return (
        <>
            <form id="NuevaEvidenciaForm" onSubmit={manejarFormulario}>
                {exito && <Alert severity="success" sx={{ mb: 2 }}>Evidencia insertada correctamente</Alert>}
                {error && <Alert severity="error" sx={{ mb: 2 }}>Error: {error}</Alert>}
                
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
                <Button variant="contained" type="submit" disabled={insertando || !props.tareaActual}>
                    {insertando ? "Insertando..." : "Añadir nueva evidencia"}
                </Button>
            </form>
        </>
    )
}
export default NuevaEvidenciaForm