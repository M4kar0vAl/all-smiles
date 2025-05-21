import { Subtitle } from "."


const ReviewsCard = ({ data }) => {
    return (
        <div className="reviews__card">
            <img
                className="reviews__card-image"
                src={data.image}
                alt=""
                width={140}
                height={140}
            />
            <div className="reviews__card-body">
                <h3 className="reviews__card-title h5">{data.excerpt}</h3>
                <p className="reviews__card-text">{data.text}</p>
                <Subtitle text={data.author} />
            </div>
        </div>
    )
}

export default ReviewsCard