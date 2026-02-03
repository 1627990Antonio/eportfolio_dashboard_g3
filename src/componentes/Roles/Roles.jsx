import { useContext } from "react"
import UserContext from "../../contextos/UserContext"

function Roles(props) {

    const user = useContext(UserContext)
    return (
        <>
            <aside>Roles <br />{props.menu}</aside>
            <p>Contexto de {user}</p>
        </>
    )
}
export default Roles