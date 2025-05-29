import { Logo, Schedule, Socials, Contacts } from '.'

import locationImg from '../assets/footer/footer_location.jpg'
import '../styles/components/Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__main container'>
                <div className='footer__col footer__col--has-logo'>
                    <Logo isAlt={true} />
                    <p className='footer__text'>
                        This is AllSmiles, a place dedicated<br />
                        to clear, white & perfect smiles.
                    </p>
                    <Socials />
                </div>
                <div className='footer__col'>
                    <Schedule isAlt={true} />
                </div>
                <div className='footer__col'>
                    <h3 className='footer__col-title h6'>Contact Info</h3>
                    <Contacts isAlt={true} />
                </div>
                <div className='footer__col'>
                    <h3 className='footer__col-title h6'>Our Location</h3>
                    <img
                        className='footer__location-image'
                        src={locationImg}
                        alt=""
                        width={303}
                        height={179}
                    />
                </div>
            </div>
            <div className='footer__extra'>
                <p className='footer__copyright'>&copy; <time dateTime="2021">2021</time> Qode Interactive, All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer