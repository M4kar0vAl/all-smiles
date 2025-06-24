import type { newsDataObj } from '@components/News'
import { Subtitle, ReadMoreLink } from '@components/.'

type PropTypes = {
    data: newsDataObj,
}

const NewsCard = ({ data }: PropTypes) => {
    return (
        <article className='news__card'>
            <img
                className='news__card-image'
                src={data.image}
                alt=""
                width={414}
                height={241}
            />
            <div className='news__card-body'>
                <Subtitle text={data.subtitle} />
                <h3 className='news__card-title h5'>{data.title}</h3>
                <p className='news__card-text'>{data.text}</p>
            </div>
            <ReadMoreLink to='/blog' />
        </article>
    )
}

export default NewsCard