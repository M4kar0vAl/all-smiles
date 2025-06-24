import { IconText } from '@components/.'

import '@styles/components/Contacts.scss'

type PropTypes = {
    isAlt?: boolean,
}

const Contacts = ({ isAlt = false }: PropTypes) => {
    return (
        <address className={`contacts ${isAlt ? 'contacts--alt' : ''}`}>
            <div className='contacts-phones'>
                <a
                    className='contacts-link'
                    href="tel:+6544715167"
                >
                    <IconText text='+654/4715-167' modifier='white-phone' />
                </a>
                {
                    isAlt
                    &&
                    <a
                        className='contacts-link'
                        href="tel:+6534715168"
                    >
                        <IconText text='+653/4715-168' />
                    </a>
                }
            </div>
            <a
                className='contacts-link'
                href="mailto:allsmiles@qodeinteractive.com"
            >
                <IconText text='allsmiles@qodeinteractive.com' modifier='white-email' />
            </a>
            <p className='contacts-address'>
                <IconText text={`63 Wall St, New York, ${!isAlt ? 'NY 10005' : ''}`} modifier='white-location' />
                {isAlt && <IconText text='New York 10005' />}
            </p>
        </address>
    )
}

export default Contacts