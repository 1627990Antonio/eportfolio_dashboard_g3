import React, {useContext} from "react";
import TokenContext from "../../contextos/TokenContext";

function Dashboard(){
    const token = useContext(TokenContext)
    return(
        <main>
            <h2>Bienvenido al Dashboard</h2>
            <p>Selecciona una opción del menú lateral.</p>
        </main>
    )
}
export default Dashboard