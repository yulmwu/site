import PropsBase from './index'

import React from 'react'
import { Theme, ThemeContext } from '../context/theme'

interface Props extends Partial<PropsBase> {
    children: React.ReactNode
    className?: string
    fontSize?: number | string
    stroke?: boolean
    color?: string
}

const Text: React.FC<Props> = (props) => {
    const { toggle } = React.useContext(ThemeContext) as Theme

    return (
        <p
            className={`${props.fontSize ?? 'text-9xl'} bg-transparent text-transparent ${
                props.stroke ? (toggle ? 'text-stroke' : 'text-stroke-light') : props.color ?? (toggle ? 'text-white' : 'text-gray-800')
            } ${props.className ?? ''}`}
        >
            {props.children}
        </p>
    )
}

export default Text
