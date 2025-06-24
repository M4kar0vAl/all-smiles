import image1 from '../assets/partners/partners1.svg'
import image2 from '../assets/partners/partners2.svg'
import image3 from '../assets/partners/partners3.svg'
import image4 from '../assets/partners/partners4.svg'
import image5 from '../assets/partners/partners5.svg'
import image6 from '../assets/partners/partners6.svg'
import '../styles/components/Partners.scss'

type partner = {
    id: number,
    link: string,
    imageURL: string,
}

const partnersList: partner[] = [
    {
        id: 1,
        link: "https://example.com",
        imageURL: image1
    },
    {
        id: 2,
        link: "https://example.com",
        imageURL: image2
    },
    {
        id: 3,
        link: "https://example.com",
        imageURL: image3
    },
    {
        id: 4,
        link: "https://example.com",
        imageURL: image4
    },
    {
        id: 5,
        link: "https://example.com",
        imageURL: image5
    },
    {
        id: 6,
        link: "https://example.com",
        imageURL: image6
    },
]

const Partners = () => {
    return (
        <section className="partners">
            <h2 className='visually-hidden'>Our partners</h2>
            <ul className="partners__list">
                {partnersList.map(data =>
                    <li className="partners__item" key={data.id}>
                        <a href={data.link} target="_blank">
                            <img
                                className="partners__image"
                                src={data.imageURL}
                                alt=""
                                width={135}
                                height={100}
                            />
                        </a>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default Partners