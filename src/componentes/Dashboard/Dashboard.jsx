import React, {useContext} from "react";
import TokenContext from "../../contextos/TokenContext";
import NuevaEvidencia from "../NuevaEvidencia/NuevaEvidencia";

function Dashboard(){
    const token = useContext(TokenContext)
    return(
        <main>Main <br/>{token}
            <NuevaEvidencia></NuevaEvidencia>
        </main>
    )
}
export default Dashboard