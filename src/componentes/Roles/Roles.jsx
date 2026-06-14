import { useContext } from "react"
import UserContext from "../../contextos/UserContext"
import MenuRoles from "./MenuRoles"

function Roles(props) {
    const user = useContext(UserContext)
    return (
        <>
            <aside style={{ padding: '10px' }}>
                <h4 style={{ color: 'white' }}>Menu ({user})</h4>
                <MenuRoles />
            </aside>
        </>
    )
}
export default Roles