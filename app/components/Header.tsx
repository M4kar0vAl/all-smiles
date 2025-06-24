import { useEffect, useState } from 'react'

import { BurgerButton, Logo, Navbar, Contacts } from '.'

import '../styles/components/Header.scss'

const Header = () => {
    const [isOverlayActive, setIsOverlayActive] = useState<boolean>(false)
    
    useEffect(() => {
        document.documentElement.classList.toggle('is-lock', isOverlayActive)
    }, [isOverlayActive])

    return (
        <header className='header'>
            <div className="header__extra">
                <div className='header__schedule'>
                    <span className='header__schedule-brace'>&#125;</span>
                    <span>Mon - Sat <time dateTime="8:00">8:00</time> <time dateTime="17:30">17:30</time>, Sunday - CLOSED</span>
                </div>
                <Contacts />
            </div>
            <div className="header__body">
                <Logo />
                <Navbar />
                <div className="header__actions">
                    <button className='header__actions-button'>
                        Search
                    </button>
                    <BurgerButton onClick={() => setIsOverlayActive(true)} />
                </div>
            </div>
            <div className={`header__overlay ${isOverlayActive ? 'is-active' : ''}`}>
                <BurgerButton onClick={() => setIsOverlayActive(false)} />
                <Navbar />
                <div className='header__overlay-only-content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad in dolore, quod repellendus blanditiis odio sit veniam quibusdam facilis eius ipsam unde laudantium libero nesciunt doloribus obcaecati ullam quo esse?
                </div>
            </div>
        </header>
    )
}

export default Header