import { Link } from "react-router"

import '@styles/components/ReadMoreLink.scss'

type PropTypes = {
    to: string,
}

const ReadMoreLink = ({ to }: PropTypes) => {
    return (
        <Link to={to} className='read-more-link'>read more</Link>
    )
}

export default ReadMoreLink