import { Link } from 'react-router'

import '@styles/components/Button.scss'

type PropTypes = {
    to?: string,
    modifier?: string,
    children: React.ReactNode,
}

const Button = ({ to='', modifier, children }: PropTypes) => {
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