import '@styles/components/Subtitle.scss'

type PropTypes = {
    text: string,
}

const Subtitle = ({ text }: PropTypes) => {
    return (
        <p className="subtitle">{text}</p>
    )
}

export default Subtitle