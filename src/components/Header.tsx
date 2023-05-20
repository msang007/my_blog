import '../App.css';
import { NavLink } from 'react-router-dom';
export const Header = () => {
    return (
        <header>
            <div className='header'>
                <h1>Mon Blog Personnel</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink  to="/">
                            <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/album">
                            <span>Album</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/activities">
                            <span>Activities</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/about">
                            <span>About</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/contact">
                            <span>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}