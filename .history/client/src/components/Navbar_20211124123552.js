import { useContext } from "react";
import { NavLink } from "react-router-dom";
im
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = (event) => {
        event.preventDefault();
        auth.logout()
        history.push('/')
    }
    return(
        <nav>
            <ul className='navbar-nav'>
                <li><NavLink to='/create'>Создать</NavLink></li>
                <li><NavLink to='/links'></NavLink>Ссылки</li>
                <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
            </ul>
        </nav>
    )
}   