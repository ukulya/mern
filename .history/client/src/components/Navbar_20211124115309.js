import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return(
        <nav>
            <ul className='navbar-nav'>
                <li><NavLink to='/create'>Создать</NavLink></li>
                <li><NavLink to='/links'></NavLink>Создать</li>
                <li><a href="/" onClick={}></a></li>
            </ul>
        </nav>
    )
}   