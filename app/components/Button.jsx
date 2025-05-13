import { Link } from 'react-router'

import '../styles/components/Button.scss'

const Button = ({ to='', modifier, children }) => {
    return (
        <>
            {
            to
                ?
                <Link className={`button ${modifier ? `button--${modifier}` : ''}`} to={to}>
                    {children}
                </Link>
                :
                <button className={`button ${modifier ? `button--${modifier}` : ''}`}>
                    {children}
                </button>
            }
        </>
    )
}

export default Button