import { useTabs } from '../hooks'

import image1 from '../assets/services/services1.jpg'
import '../styles/components/Services.scss'

type tabsObj = {
    id: number,
    buttonText: string,
    title: string,
    subtitle: string,
    text: string,
    image: string,
}

const tabsData: tabsObj[] = [
    {
        id: 1,
        buttonText: 'Root Canal Specialist',
        title: 'Fast & professional treatments for every patient',
        subtitle: 'Proin gravida nibh vel velit auctor aliquet ent. Est vel sum sollicitudin, lorem ad quismi bibe nd mi auctor.',
        text: 'Duis sed odio sit amet nibh vulputate cursus a sit am maur Morbi accumsan sed ipsum velit. Nam nec tellus a od tincidunt auctor a ornare odio. Alia ludus animal ius te, ea amet necessitatibus vix. Solum persius voluptaria ad nostro quis odio scriptorem ex vim.',
        image: image1,
    },
    {
        id: 2,
        buttonText: 'Alignment Specialist',
        title: 'Fast & professional treatments for every patient 2',
        subtitle: 'Proin gravida nibh vel velit auctor aliquet ent. Est vel sum sollicitudin, lorem ad quismi bibe nd mi auctor.',
        text: 'Duis sed odio sit amet nibh vulputate cursus a sit am maur Morbi accumsan sed ipsum velit. Nam nec tellus a od tincidunt auctor a ornare odio. Alia ludus animal ius te, ea amet necessitatibus vix. Solum persius voluptaria ad nostro quis odio scriptorem ex vim.',
        image: image1,
    },
    {
        id: 3,
        buttonText: 'Cosmetic Dentistry',
        title: 'Fast & professional treatments for every patient 3',
        subtitle: 'Proin gravida nibh vel velit auctor aliquet ent. Est vel sum sollicitudin, lorem ad quismi bibe nd mi auctor.',
        text: 'Duis sed odio sit amet nibh vulputate cursus a sit am maur Morbi accumsan sed ipsum velit. Nam nec tellus a od tincidunt auctor a ornare odio. Alia ludus animal ius te, ea amet necessitatibus vix. Solum persius voluptaria ad nostro quis odio scriptorem ex vim.',
        image: image1,
    },
    {
        id: 4,
        buttonText: 'Live Dental Advisory',
        title: 'Fast & professional treatments for every patient 4',
        subtitle: 'Proin gravida nibh vel velit auctor aliquet ent. Est vel sum sollicitudin, lorem ad quismi bibe nd mi auctor.',
        text: 'Duis sed odio sit amet nibh vulputate cursus a sit am maur Morbi accumsan sed ipsum velit. Nam nec tellus a od tincidunt auctor a ornare odio. Alia ludus animal ius te, ea amet necessitatibus vix. Solum persius voluptaria ad nostro quis odio scriptorem ex vim.',
        image: image1,
    },
]

const Services = () => {
    const {
        currentData,
        currentPage,
        setPage
    } = useTabs(tabsData)
    
    const {title, subtitle, text, image} = currentData[0]

    return (
        <section className="services">
            <h2 className='visually-hidden'>Our services</h2>
            <div className='services__tabs container'>
                <div className='services__tabs-panel'>
                    {tabsData.map((data, index) => 
                        <button
                            key={data.id}
                            className={`services__tabs-button h6 ${index + 1 === currentPage ? 'is-active' : ''}`}
                            type='button'
                            onClick={() => setPage(index + 1)}
                        >{data.buttonText}</button>
                    )}
                </div>
                <div className='services__tabs-body'>
                    <div className="services__tabs-content">
                        <h3 className='services__tabs-title h4'>{title}</h3>
                        <p className='services__tabs-subtitle'>{subtitle}</p>
                        <p className='services__tabs-text'>{text}</p>
                    </div>
                    <img
                        className='services__tabs-image'
                        src={image}
                        alt=""
                        width={533}
                        height={366}
                    />
                </div>
            </div>
        </section>
    )
}

export default Services