import { Link } from "react-router"

import logo from '../assets/logo.svg'
import '../styles/components/Logo.scss'

const Logo = () => {
    return (
        <Link to="/" className='logo' >
            <img
                src={logo}
                alt=""
                className='logo__image'
                width={135}
                height={17}
            />
        </Link>
    )
}

export default Logo