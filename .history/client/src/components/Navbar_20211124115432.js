import { NavLink } from "react-router-dom"

export const Navbar = () => {
    const logoutHandler = (event) => {
        event.preventDefault();
        auth.logout()
        history.pu
    }
    return(
        <nav>
            <ul className='navbar-nav'>
                <li><NavLink to='/create'>Создать</NavLink></li>
                <li><NavLink to='/links'></NavLink>Создать</li>
                <li><a href="/" onClick={}>Выйти</a></li>
            </ul>
        </nav>
    )
}   