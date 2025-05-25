import { useRef, useState } from "react"

import '../styles/components/Video.scss'


const Video = ({ videoURL, posterURL, width, height }) => {
    const [isVideoActivated, setIsVideoActivated] = useState(false)
    const videoRef = useRef(null)

    function handlePlayButtonClick() {
        if (isVideoActivated) {
            return
        }

        setIsVideoActivated(true)
        videoRef.current.play()
    }

    return (
        <div className={`video ${isVideoActivated ? 'is-active' : ''}`}>
            <video
                className='video__element'
                src={videoURL}
                width={width}
                height={height}
                poster={posterURL}
                controls={isVideoActivated}
                ref={videoRef}
            ></video>
            <button
                onClick={handlePlayButtonClick}
                className={`video__play-button ${isVideoActivated ? 'is-clicked' : ''}`}
                type='button'
            ></button>
        </div>
    )
}

export default Video