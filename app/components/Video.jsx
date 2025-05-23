import { useRef, useState } from "react"

import '../styles/components/Video.scss'


const Video = ({ videoURL, posterURL, width, height }) => {
    const [isPlayButtonClicked, setIsPlayButtonClicked] = useState(false)
    const videoRef = useRef(null)

    function handlePlayButtonClick() {
        if (isPlayButtonClicked) {
            return
        }

        setIsPlayButtonClicked(true)
        videoRef.current.play()
    }

    return (
        <div className="video">
            <video
                className='video__element'
                src={videoURL}
                width={width}
                height={height}
                poster={posterURL}
                controls={isPlayButtonClicked}
                ref={videoRef}
            ></video>
            <button
                onClick={handlePlayButtonClick}
                className={`video__play-button ${isPlayButtonClicked ? 'is-clicked' : ''}`}
                type='button'
            ></button>
        </div>
    )
}

export default Video