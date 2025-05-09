import '../styles/components/BurgerButton.scss'

const BurgerButton = ({ onClick }) => {
    return (
        <button className='burger-button' onClick={onClick}>
            <span className='burger-button__line'></span>
            <span className='burger-button__line'></span>
            <span className='burger-button__line'></span>
        </button>
    )
}

export default BurgerButton