import { useState } from 'react'

import BurgerButton from './BurgerButton'
import IconText from './IconText'
import Logo from './Logo'
import Navbar from './Navbar'

import '../styles/components/Header.scss'

const Header = () => {
    const [isOverlayActive, setIsOverlayActive] = useState(false)

    return (
        <header className='header'>
            <div className="header__extra">
                <div className='header__schedule'>
                    <span className='header__schedule-brace'>&#125;</span>
                    <span>Mon - Sat <time dateTime="8:00">8:00</time> <time dateTime="17:30">17:30</time>, Sunday - CLOSED</span>
                </div>
                <address className='header__contacts'>
                    <a href="tel:+6544715167" className='header__contacts-link'>
                        <IconText text='+654/4715-167' modifier='white-phone' />
                    </a>
                    <a href="mailto:allsmiles@qodeinteractive.com" className='header__contacts-link'>
                        <IconText text='allsmiles@qodeinteractive.com' modifier='white-email' />
                    </a>
                    <span className='header__contacts-address'>
                        <IconText text='63 Wall St, New York, NY 10005' modifier='white-location' />
                    </span>
                </address>
            </div>
            <div className="header__body">
                <Logo className='header__logo' />
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