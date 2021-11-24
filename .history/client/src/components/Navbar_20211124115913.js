import { useContext } from "react";
import { NavLink,useHistory } from "react-router-dom"
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
                <li><NavLink to='/links'></NavLink>Сы</li>
                <li><a href="/" onClick={}>Выйти</a></li>
            </ul>
        </nav>
    )
}   