import type React from 'react'
import '@styles/components/BurgerButton.scss'

type PropTypes = {
    onClick: (event: React.PointerEvent<HTMLButtonElement>) => void
}

const BurgerButton = ({ onClick }: PropTypes) => {
    return (
        <button className='burger-button' onClick={onClick}>
            <span className='burger-button__line'></span>
            <span className='burger-button__line'></span>
            <span className='burger-button__line'></span>
        </button>
    )
}

export default BurgerButton