import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return(
        <nav>
            <ul className='navbar-nav'>
                <li><NavLink to='/create'>Создать</NavLink></li>
                <li><NavLink></NavLink></li>
            </ul>
        </nav>
    )
}   