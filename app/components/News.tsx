import { Subtitle, NewsCard } from '.'

import image1 from '../assets/news/news1.jpg'
import image2 from '../assets/news/news2.jpg'
import image3 from '../assets/news/news3.jpg'
import '../styles/components/News.scss'

export interface newsDataObj {
    id: number,
    title: string,
    subtitle: string,
    text: string,
    image: string,
}

const newsData: newsDataObj[] = [
    {
        id: 1,
        title: 'All about invisalign',
        subtitle: '17th November 2020, Pediatric',
        text: 'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh mel integre facilis.',
        image: image1,
    },
    {
        id: 2,
        title: 'Braces for teens',
        subtitle: '17th November 2020, Pediatric',
        text: 'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh mel integre facilis.',
        image: image2,
    },
    {
        id: 3,
        title: 'Dental association',
        subtitle: '17th November 2020, Pediatric',
        text: 'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh mel integre facilis.',
        image: image3,
    },
]

const News = () => {
    return (
        <section className="news">
            <header className="news__header container">
                <Subtitle text='dental practice' />
                <h2 className='news__title'>Read Latest News</h2>
                <p className='news__text'>In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis.</p>
            </header>
            <div className='news__content container'>
                {newsData.map(data => <NewsCard key={data.id} data={data} />)}
            </div>
        </section>
    )
}

export default News