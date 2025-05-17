import '../styles/components/Schedule.scss'

const Schedule = () => {
    return (
        <div className='schedule'>
            <h3 className='schedule__title h4'>Working Hours</h3>
            <dl className='schedule__list'>
                <div className='schedule__item'>
                    <dt className='schedule__key'>Monday</dt>
                    <dd className='schedule__value'><time dateTime="08:00">8am</time>-<time dateTime='19:00'>7pm</time></dd>
                </div>
                <div className='schedule__item'>
                    <dt className='schedule__key'>Tuesday</dt>
                    <dd className='schedule__value'><time dateTime="08:00">8am</time>-<time dateTime='19:00'>7pm</time></dd>
                </div>
                <div className='schedule__item'>
                    <dt className='schedule__key'>Wednesday</dt>
                    <dd className='schedule__value'><time dateTime="08:00">8am</time>-<time dateTime='19:00'>7pm</time></dd>
                </div>
                <div className='schedule__item'>
                    <dt className='schedule__key'>Thursday</dt>
                    <dd className='schedule__value'><time dateTime="08:00">8am</time>-<time dateTime='19:00'>7pm</time></dd>
                </div>
                <div className='schedule__item'>
                    <dt className='schedule__key'>Friday</dt>
                    <dd className='schedule__value'><time dateTime="08:00">8am</time>-<time dateTime='19:00'>7pm</time></dd>
                </div>
                <div className='schedule__item'>
                    <dt className='schedule__key'>Saturday</dt>
                    <dd className='schedule__value'><time dateTime="08:00">8am</time>-<time dateTime='19:00'>7pm</time></dd>
                </div>
                <div className='schedule__item'>
                    <dt className='schedule__key'>Sunday</dt>
                    <dd className='schedule__value'>closed</dd>
                </div>
            </dl>
        </div>
    )
}

export default Schedule