import { Form } from 'react-router'
import { Video, Button } from '@components/.'

import poster from '@assets/appointment/appointment_poster.jpg'
import video from '@assets/appointment/sample_640x360.mp4'
import '@styles/components/Appointment.scss'

const Appointment = () => {
    return (
        <section className="appointment">
            <Video videoURL={video} posterURL={poster} width={1016} height={716} />
            <div className='appointment__content'>
                <div className='appointment__form'>
                    <div className='appointment__form-header'>
                        <h2 className='apppointment__title h4'>Request an Appointment</h2>
                        <p className='appointment__text'>Proin gravida nibh vel velit auctor aliquet justo.</p>
                    </div>
                    <Form className='appointment__form-body' method='post'>
                        <input
                            className='appointment__input'
                            type="text"
                            name="firstName"
                            id=""
                            placeholder='First Name'
                        />
                        <input
                            className='appointment__input'
                            type="text"
                            name="lastName"
                            id=""
                            placeholder='Last Name'
                        />
                        <input
                            className='appointment__input'
                            type="email"
                            name="email"
                            id=""
                            placeholder='E-Mail Address'
                        />
                        <input
                            className='appointment__input'
                            type="tel"
                            name="phone"
                            id=""
                            placeholder='Phone Number'
                        />
                        <textarea
                            className='appointment__input appointment__input--textarea'
                            name="comment"
                            id=""
                        ></textarea>
                        <Button>Send Request</Button>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default Appointment