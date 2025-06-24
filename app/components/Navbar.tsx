import { NavLink } from 'react-router'

import '@styles/components/Navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar__list'>
            <li className='navbar__item'>
                <NavLink to="/" className='navbar__link'>
                    Home
                </NavLink>
            </li>
            <li className='navbar__item'>
                <NavLink to="/pages" className='navbar__link'>
                    Pages
                </NavLink>
            </li>
            <li className='navbar__item'>
                <NavLink to="/staff" className='navbar__link'>
                    Staff
                </NavLink>
            </li>
            <li className='navbar__item'>
                <NavLink to="/blog" className='navbar__link'>
                    Blog
                </NavLink>
            </li>
            <li className='navbar__item'>
                <NavLink to="/shop" className='navbar__link'>
                    Shop
                </NavLink>
            </li>
            <li className='navbar__item'>
                <NavLink to="/landing" className='navbar__link'>
                    Landing
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}
export default Navbar