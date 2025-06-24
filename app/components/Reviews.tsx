import { useEffect, useState } from 'react'

import { Pagination, Subtitle, ReviewsCard } from '@components/.'
import { useSlider, useMatchMedia } from '@/hooks'

import authorImg1 from '@assets/reviews/reviews_author1.jpg'
import authorImg2 from '@assets/reviews/reviews_author2.jpg'
import authorImg3 from '@assets/reviews/reviews_author3.jpg'
import '@styles/components/Reviews.scss'

export interface reviewObj {
    id: number,
    excerpt: string,
    text: string,
    author: string,
    image: string,
}

const reviewsData: reviewObj[] = [
    {
        id: 1,
        excerpt: 'Quick, easy & reliable',
        text: 'Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.',
        author: 'Jenna Johnson',
        image: authorImg1,
    },
    {
        id: 2,
        excerpt: 'The best clinic in town',
        text: 'Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.',
        author: 'Robert Logan',
        image: authorImg2,
    },
    {
        id: 3,
        excerpt: 'The true professionals',
        text: 'Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.',
        author: 'August Johns',
        image: authorImg3,
    },
    {
        id: 4,
        excerpt: 'The best clinic in town',
        text: 'Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.',
        author: 'Robert Logan',
        image: authorImg2,
    },
    {
        id: 5,
        excerpt: 'Quick, easy & reliable',
        text: 'Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.',
        author: 'Jenna Johnson',
        image: authorImg1,
    },
    {
        id: 6,
        excerpt: 'The true professionals',
        text: 'Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.',
        author: 'August Johns',
        image: authorImg3,
    },
    {
        id: 7,
        excerpt: 'The best clinic in town',
        text: 'Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.',
        author: 'Robert Logan',
        image: authorImg2,
    },
    {
        id: 8,
        excerpt: 'The true professionals',
        text: 'Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.',
        author: 'August Johns',
        image: authorImg3,
    },
    {
        id: 9,
        excerpt: 'Quick, easy & reliable',
        text: 'Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.',
        author: 'Jenna Johnson',
        image: authorImg1,
    },
]

const Reviews = () => {
    const [perPage, setPerPage] = useState<number>(3)

    const {
        currentData,
        currentPage,
        nextPage,
        prevPage,
        setPage
    } = useSlider(reviewsData, perPage)

    const matchMedia = useMatchMedia()

    useEffect(() => {
        if (matchMedia) {
            if (matchMedia.mobile.matches) {
                setPerPage(1)
            } else if (matchMedia.tablet.matches) {
                setPerPage(2)
            }

            matchMedia.tabletAbove.addEventListener('change', handleTabletAboveResolution)
            matchMedia.tablet.addEventListener('change', handleTabletResolution)
            matchMedia.mobile.addEventListener('change', handleMobileResolution)
        }

        return () => {
            if (matchMedia) {
                matchMedia.tabletAbove.removeEventListener('change', handleTabletAboveResolution)
                matchMedia.tablet.removeEventListener('change', handleTabletResolution)
                matchMedia.mobile.removeEventListener('change', handleMobileResolution)
            }
        }
    }, [matchMedia])

    function handleTabletAboveResolution(event: MediaQueryListEvent): void {
        if (event.matches) {
            setPerPage(3)
        }
    }

    function handleTabletResolution(event: MediaQueryListEvent): void {
        if (event.matches) {
            setPerPage(2)
        }
    }

    function handleMobileResolution(event: MediaQueryListEvent): void {
        if (event.matches) {
            setPerPage(1)
        }
    }

    return (
        <section className='reviews'>
            <header className='reviews__header container'>
                <Subtitle text='our dear clients' />
                <h2 className='reviews__title'>What People Say</h2>
                <p className='reviews__text'>In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis.</p>
            </header>
            <div className='reviews__slider'>
                <button className='reviews__slider-button reviews__slider-button--prev' onClick={prevPage}></button>
                <div className="reviews__slider-list">
                    {currentData.map((data) => <ReviewsCard data={data} key={data.id} />)}
                </div>
                <button className='reviews__slider-button reviews__slider-button--next' onClick={nextPage}></button>
                <Pagination
                    length={Math.ceil(reviewsData.length / perPage)}
                    activePage={currentPage}
                    onClick={setPage}
                />
            </div>
        </section>
    )
}

export default Reviews