import { useRef, useState } from "react"

import '../styles/components/Video.scss'

type PropTypes = {
    videoURL: string,
    posterURL: string,
    width: number,
    height: number,
}

const Video = ({ videoURL, posterURL, width, height }: PropTypes) => {
    const [isVideoActivated, setIsVideoActivated] = useState<boolean>(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    function handlePlayButtonClick() {
        if (isVideoActivated) {
            return
        }

        setIsVideoActivated(true)
        videoRef.current?.play()
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