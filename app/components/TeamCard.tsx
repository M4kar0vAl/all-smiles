import { Link } from 'react-router'

import { Subtitle } from '@components/.'
import type { teamObj } from '@components/Team'

type PropTypes = {
    data: teamObj,
}

const TeamCard = ({ data }: PropTypes) => {
    return (
        <div className='team__card'>
            <Link to='/staff' className='team__card-link'>
                <div className='team__card-team-image'>
                    <img
                        className='team__card-image'
                        src={data.image}
                        alt=""
                        width={288}
                        height={290}
                    />
                </div>
            </Link>
            <div className='team__card-body'>
                <h3 className="team__card-title h6">{data.title}</h3>
                <Subtitle text={data.subtitle} />
            </div>
        </div>
    )
}

export default TeamCard