import { Button } from '@components/.'

import '@styles/components/DiscountBanner.scss'

const DiscountBanner = () => {
    return (
        <section className="discount-banner">
            <div className="discount-banner__inner container">
                <header className="discount-banner__header">
                    <h2 className="discount-banner__title h4">Discount dental plans save you <span className='discount-banner__discount'>up to 60%</span></h2>
                    <p className="discount-banner__text">Sea te illum euismod, ex dicta noluisse qui, sea an hinc pericula imperdiet sum.</p>
                </header>
                <Button to='/pages' modifier='white'>Learn more</Button>
            </div>
        </section>
    )
}
 
export default DiscountBanner