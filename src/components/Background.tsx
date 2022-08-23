import React from 'react'
import Birds from 'vanta/dist/vanta.birds.min'

import { Theme, ThemeContext } from '../../context/theme'

const Background: React.FC = () => {
    const { toggle } = React.useContext(ThemeContext) as Theme

    const birdsRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (birdsRef.current)
            Birds({
                el: birdsRef.current,
                backgroundAlpha: 0,
                quantity: 3,
                speedLimit: 3,
                alignment: 1000,
            })
    }, [])

    return <div className={`fixed w-[100vw] h-[100vh] ${toggle ? 'bg-background' : 'bg-background-light'}`} ref={birdsRef} />
}

export default Background
