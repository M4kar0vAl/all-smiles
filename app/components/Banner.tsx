import React from "react"

import { useSlider } from "../hooks"

import Button from './Button'
import { Pagination } from '.'
import { BannerSlide } from '.'

import banner3 from '../assets/banner/banner3.jpg'
import '../styles/components/Banner.scss'

export interface slideData {
    id: number,
    title: React.JSX.Element,
    subtitle: string,
    actions: React.JSX.Element,
    backgroundImage: string,
}

const bannerSlidesData: slideData[] = [
    {
        id: 1,
        title: (
            <>
                <p className="banner__slide-title-line">We ajgbalkgnk 1 the best</p>
                <p className="banner__slide-title-line">services agnfawskmfa there</p>
            </>
        ),
        subtitle: 'dental practice',
        actions: (
            <>
                <Button to="/pages">view more</Button>
                <Button to="/shop" modifier='white'>purchase</Button>
            </>
        ),
        backgroundImage: banner3,
    },
    {
        id: 2,
        title: (
            <>
                <p className="banner__slide-title-line">We augfhwakfa 2 the best</p>
                <p className="banner__slide-title-line">services out there</p>
            </>
        ),
        subtitle: 'dental practice',
        actions: (
            <>
                <Button to="/pages">view more</Button>
                <Button to="/shop" modifier='white'>purchase</Button>
            </>
        ),
        backgroundImage: banner3,
    },
    {
        id: 3,
        title: (
            <>
                <p className="banner__slide-title-line">We provide the best</p>
                <p className="banner__slide-title-line">services out there</p>
            </>
        ),
        subtitle: 'dental practice',
        actions: (
            <>
                <Button to="/pages">view more</Button>
                <Button to="/shop" modifier='white'>purchase</Button>
            </>
        ),
        backgroundImage: banner3,
    },
    {
        id: 4,
        title: (
            <>
                <p className="banner__slide-title-line">We provide 4 the best</p>
                <p className="banner__slide-title-line">services out there</p>
            </>
        ),
        subtitle: 'dental practice',
        actions: (
            <>
                <Button to="/pages">view more</Button>
                <Button to="/shop" modifier='white'>purchase</Button>
            </>
        ),
        backgroundImage: banner3,
    },
]

const Banner = () => {
    const {
        currentData,
        currentPage,
        nextPage,
        prevPage,
        setPage,
    } = useSlider(bannerSlidesData, 1)

    const { backgroundImage } = currentData[0]

    return (
        <section className="banner" style={{ background: `url(${backgroundImage}) center/cover no-repeat` }}>
            <div className="banner__body">
                <button
                    className="banner__slide-button banner__slide-button--prev"
                    type="button"
                    onClick={prevPage}
                ></button>
                <div className="banner__slide-list container">
                    {
                        currentData.map(slideData =>
                            <BannerSlide
                                slideData={slideData}
                                isActive={true}
                                key={slideData.id}
                            />
                        )
                    }
                </div>
                <button
                    className="banner__slide-button banner__slide-button--next"
                    type="button"
                    onClick={nextPage}
                ></button>
            </div>
            <Pagination length={bannerSlidesData.length} activePage={currentPage} onClick={setPage} />
        </section>
    )
}

export default Banner