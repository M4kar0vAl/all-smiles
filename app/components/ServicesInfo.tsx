import ReadMoreLink from './ReadMoreLink'
import Schedule from './Schedule'

import cardImg1 from '../assets/services-info/services-info1.jpg'
import cardImg2 from '../assets/services-info/services-info2.jpg'
import overviewImg1 from '../assets/services-info/services-overview1.svg'
import overviewImg2 from '../assets/services-info/services-overview2.svg'
import overviewImg3 from '../assets/services-info/services-overview3.svg'
import overviewImg4 from '../assets/services-info/services-overview4.svg'
import overviewImg5 from '../assets/services-info/services-overview5.svg'
import overviewImg6 from '../assets/services-info/services-overview6.svg'
import '../styles/components/ServicesInfo.scss'

const Info = () => {
    return (
        <section className="services-info container">
            <h2 className="visually-hidden">Information about our services</h2>
            <div className='services-info__cards'>
                <div className='services-info__card'>
                    <img
                        className='services-info__card-image'
                        src={cardImg1}
                        alt=""
                        width={414}
                        height={255}
                    />
                    <div className='services-info__card-body'>
                        <h3 className='services-info__card-title h5'>Pick the dentist that fits all your needs the best</h3>
                        <p className='services-info__card-text'>
                            Lorem ipsum dolor sit amet, eu duo ferri labor. Mea ex modo reque senserit, et sed hinc dolor, scaevola sum salutandi expetendis vix ne. Eros dicat his sum mel quod mundi consequat sum.
                        </p>
                    </div>
                    <ReadMoreLink to='/staff' />
                </div>
                <div className="services-info__card services-info__card--list">
                    <img
                        className='services-info__card-image'
                        src={cardImg2}
                        alt=""
                        width={414}
                        height={255}
                    />
                    <ul className='services-info__card-list'>
                        <li className='services-info__card-item'>Professional dental services 24/7</li>
                        <li className='services-info__card-item'>Oral hygiene advisory & assessment</li>
                        <li className='services-info__card-item'>Oral and maxillofacial surgery</li>
                        <li className='services-info__card-item'>Dental public health insurance</li>
                        <li className='services-info__card-item'>Free online appointment booking</li>
                        <li className='services-info__card-item'>Various cosmetic dentistry services</li>
                        <li className='services-info__card-item'>Special care dentistry services</li>
                    </ul>
                </div>
                <div className='services-info__card services-info__card--schedule'>
                    <Schedule />
                    <a className='services-info__call-us-link' href='tel:+3547591675'>Call Us: +354/759-1675</a>
                </div>
            </div>
            <div className='services-info__overview'>
                <div className='services-info__overview-card'>
                    <img
                        className='services-info__overview-card-image'
                        src={overviewImg1}
                        alt=""
                        width={97}
                        height={96}
                    />
                    <div className='services-info__overview-card-body'>
                        <h3 className='services-info__overview-card-title h6'>Root Canal Specialist</h3>
                        <p className='services-info__overview-card-text'>Vix nibh iudicabit necessitus et, quam inermis voluptatus.</p>
                    </div>
                </div>
                <div className='services-info__overview-card'>
                    <img
                        className='services-info__overview-card-image'
                        src={overviewImg2}
                        alt=""
                        width={97}
                        height={89}
                    />
                    <div className='services-info__overview-card-body'>
                        <h3 className='services-info__overview-card-title h6'>Alignment Specialist</h3>
                        <p className='services-info__overview-card-text'>Vix nibh iudicabit necessitus et, quam inermis voluptatus.</p>
                    </div>
                </div>
                <div className='services-info__overview-card'>
                    <img
                        className='services-info__overview-card-image'
                        src={overviewImg3}
                        alt=""
                        width={97}
                        height={79}
                    />
                    <div className='services-info__overview-card-body'>
                        <h3 className='services-info__overview-card-title h6'>Cosmetic Dentistry</h3>
                        <p className='services-info__overview-card-text'>Vix nibh iudicabit necessitus et, quam inermis voluptatus.</p>
                    </div>
                </div>
                <div className='services-info__overview-card'>
                    <img
                        className='services-info__overview-card-image'
                        src={overviewImg4}
                        alt=""
                        width={97}
                        height={92}
                    />
                    <div className='services-info__overview-card-body'>
                        <h3 className='services-info__overview-card-title h6'>Oral Hygiene Experts</h3>
                        <p className='services-info__overview-card-text'>Vix nibh iudicabit necessitus et, quam inermis voluptatus.</p>
                    </div>
                </div>
                <div className='services-info__overview-card'>
                    <img
                        className='services-info__overview-card-image'
                        src={overviewImg5}
                        alt=""
                        width={97}
                        height={94}
                    />
                    <div className='services-info__overview-card-body'>
                        <h3 className='services-info__overview-card-title h6'>Live Dental Advisory</h3>
                        <p className='services-info__overview-card-text'>Vix nibh iudicabit necessitus et, quam inermis voluptatus.</p>
                    </div>
                </div>
                <div className='services-info__overview-card'>
                    <img
                        className='services-info__overview-card-image'
                        src={overviewImg6}
                        alt=""
                        width={97}
                        height={85}
                    />
                    <div className='services-info__overview-card-body'>
                        <h3 className='services-info__overview-card-title h6'>Cavity Inspection</h3>
                        <p className='services-info__overview-card-text'>Vix nibh iudicabit necessitus et, quam inermis voluptatus.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info