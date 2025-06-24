import '../styles/components/Schedule.scss'

type PropTypes = {
    isAlt?: boolean,
}

const Schedule = ({ isAlt = false }: PropTypes) => {
    return (
        <div className={`schedule ${isAlt ? 'schedule--alt' : ''}`}>
            <h3 className={`schedule__title ${isAlt ? 'h6' : 'h4'}`}>Work{isAlt ? '' : 'ing'} Hours</h3>
            <dl className='schedule__list'>
                <div className='schedule__item'>
                    <dt className='schedule__key'>Monday{isAlt && ':'}</dt>
                    <dd className='schedule__value'><time dateTime="08:00">8am</time>-<time dateTime='19:00'>7pm</time></dd>
                </div>
                <div className='schedule__item'>
                    <dt className='schedule__key'>Tuesday{isAlt && ':'}</dt>
                    <dd className='schedule__value'><time dateTime="08:00">8am</time>-<time dateTime='19:00'>7pm</time></dd>
                </div>
                <div className='schedule__item'>
                    <dt className='schedule__key'>Wednesday{isAlt && ':'}</dt>
                    <dd className='schedule__value'><time dateTime="08:00">8am</time>-<time dateTime='19:00'>7pm</time></dd>
                </div>
                <div className='schedule__item'>
                    <dt className='schedule__key'>Thursday{isAlt && ':'}</dt>
                    <dd className='schedule__value'><time dateTime="08:00">8am</time>-<time dateTime='19:00'>7pm</time></dd>
                </div>
                <div className='schedule__item'>
                    <dt className='schedule__key'>Friday{isAlt && ':'}</dt>
                    <dd className='schedule__value'><time dateTime="08:00">8am</time>-<time dateTime='19:00'>7pm</time></dd>
                </div>
                <div className='schedule__item'>
                    <dt className='schedule__key'>Saturday{isAlt && ':'}</dt>
                    <dd className='schedule__value'><time dateTime="08:00">8am</time>-<time dateTime='19:00'>7pm</time></dd>
                </div>
                <div className='schedule__item'>
                    <dt className='schedule__key'>Sunday{isAlt && ':'}</dt>
                    <dd className='schedule__value'>closed</dd>
                </div>
            </dl>
        </div>
    )
}

export default Schedule