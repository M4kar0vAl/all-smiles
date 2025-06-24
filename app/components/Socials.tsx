import linkedInIcon from '../assets/socials/linked_in_icon.svg'
import twitterIcon from '../assets/socials/twitter_icon.svg'
import facebookIcon from '../assets/socials/facebook_icon.svg'
import '../styles/components/Socials.scss'

type socialObj = {
    id: number,
    link: string,
    image: string,
}

const socials: socialObj[] = [
    {
        id: 1,
        link: 'https://example.com',
        image: linkedInIcon,
    },
    {
        id: 2,
        link: 'https://example.com',
        image: twitterIcon,
    },
    {
        id: 3,
        link: 'https://example.com',
        image: facebookIcon,
    },
]

const Socials = () => {
    return (
        <ul className='soc1als'>
            {socials.map(
                data => 
                    <li className="soc1als-item" key={data.id}>
                        <a
                            className='soc1als-link'
                            href={data.link}
                            target='_blank'
                        >
                            <img
                                className='soc1als-image'
                                src={data.image}
                                alt=""
                            />
                        </a>
                    </li>
            )}
        </ul>
    )
}

export default Socials