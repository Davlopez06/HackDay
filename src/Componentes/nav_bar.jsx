import { Link, NavLink } from "react-router-dom";

export default function Navbar () {

    return (
        <nav>
        
        <Link to = "/indicadores">indicadores</Link>

        <Link to = "/agentes">agentes</Link>
        </nav>
    )
}