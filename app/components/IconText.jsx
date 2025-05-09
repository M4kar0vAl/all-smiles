import '../styles/components/IconText.scss'

const IconText = ({text, modifier}) => {
    return (
        <span className={`icon-text icon-text--${modifier}`}>{text}</span>
    )
}

export default IconText