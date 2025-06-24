import '../styles/components/IconText.scss'

type PropTypes = {
    text: string,
    modifier?: string,
}

const IconText = ({text, modifier}: PropTypes) => {
    return (
        <span className={`icon-text icon-text--${modifier}`}>{text}</span>
    )
}

export default IconText