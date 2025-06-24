import { Subtitle, Video } from '.'

import poster from '../assets/video_info/poster.jpg'
import video from '../assets/video_info/sample_640x360.mp4'
import '../styles/components/VideoInfo.scss'

const VideoInfo = () => {
    return (
        <section className="video-info">
            <div className="video-info__body">
                <Subtitle text='dental practice' />
                <h2 className="video-info__title h3">Fully dedicated to your dental health</h2>
                <p className="video-info__text">Te veritus tractatos delicatissimi qui, justo diceret mentitum ut sit. Qui sed reque dicam, qui veri nullam vituperatoribus in. Tibique maiestatis sum quod sum ut alienum nec et, summo possim persequeris vix mea. Adhuc quodsi qui, sit no tale essent electram. Mei sum prodesset in pro, quo scripta feugait vidisse.</p>
                <div className="video-info__sign">Andrea McCollins</div>
            </div>
            <Video videoURL={video} posterURL={poster} width={1018} height={706} />
        </section>
    )
}

export default VideoInfo