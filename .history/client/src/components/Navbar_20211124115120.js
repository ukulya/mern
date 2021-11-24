import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><NavLink to='/create'></NavLink></li>
                <li><NavLink></NavLink></li>
            </ul>
        </nav>
    )
}   