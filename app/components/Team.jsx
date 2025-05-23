import { Subtitle, TeamCard } from '.'

import image1 from '../assets/team/team1.jpg'
import image2 from '../assets/team/team2.jpg'
import image3 from '../assets/team/team3.jpg'
import image4 from '../assets/team/team4.jpg'
import '../styles/components/Team.scss'

const teamData = [
    {
        id: 1,
        title: 'Howard Holmes',
        subtitle: 'estetic dentist',
        image: image1,
    },
    {
        id: 2,
        title: 'Ella Thompson',
        subtitle: 'dental technician',
        image: image2,
    },
    {
        id: 3,
        title: 'Vincent Cooper',
        subtitle: 'estetic dentist',
        image: image3,
    },
    {
        id: 4,
        title: 'Danielle Bryant',
        subtitle: 'dental technician',
        image: image4,
    },
]

const Team = () => {
    return (
        <section className="team">
            <header className='team__header container'>
                <Subtitle text='the allsmiles team' />
                <h2 className='team__title'>Meet Our Experts</h2>
                <p className='team__text'>
                    An delicata inimicus sea, vis equidem oporteat conclusion mundi et. Nec malis dolor fabellas ex, eu nec falli iuvaret. Per elitr eloquentiam an esse.
                </p>
            </header>
            <div className='team__content container'>
                {teamData.map(data => <TeamCard data={data} key={data.id} />)}
            </div>
        </section>
    )
}

export default Team