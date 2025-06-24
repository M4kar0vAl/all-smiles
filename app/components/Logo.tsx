import { Link } from "react-router"

import logo from '../assets/logo.svg'
import logoAlt from '../assets/logo-alt.png'
import '../styles/components/Logo.scss'

type PropTypes = {
    isAlt?: boolean
}

const Logo = ({ isAlt = false }: PropTypes) => {
    return (
        <Link to="/" className='logo' >
            <img
                src={isAlt ? logoAlt : logo}
                alt=""
                className='logo__image'
                width={isAlt ? 105 : 135}
                height={isAlt ? 110 : 17}
            />
        </Link>
    )
}

export default Logo