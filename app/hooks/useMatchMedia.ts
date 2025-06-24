import { useEffect, useState } from "react"

import pxToRem from '../utils/pxToRem'
import { resolutions } from '../utils/constants'

function useMatchMedia() {
    const [matchMedia, setMatchMedia] = useState<{ [key: string]: MediaQueryList } | null>(null)

    useEffect(() => {
        setMatchMedia({
            tabletAbove: window.matchMedia(`(width > ${pxToRem(resolutions.tablet)}rem)`),
            tablet: window.matchMedia(`(${pxToRem(resolutions.mobile)}rem <= width <= ${pxToRem(resolutions.tablet)}rem)`),
            mobile: window.matchMedia(`(width <= ${pxToRem(resolutions.mobile)}rem)`)
        })
    }, [])

    return matchMedia
}

export default useMatchMedia