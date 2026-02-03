import React, {useContext} from "react";
import TokenContext from "../../contextos/TokenContext";

function Dashboard(){
    const token = useContext(TokenContext)
    return(
        <main>Main <br/>{token}</main>
    )
}
export default Dashboard