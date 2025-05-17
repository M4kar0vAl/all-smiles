import { Link } from "react-router"

import '../styles/components/ReadMoreLink.scss'

const ReadMoreLink = ({to}) => {
    return (
        <Link to={to} className='read-more-link'>read more</Link>
    )
}

export default ReadMoreLink