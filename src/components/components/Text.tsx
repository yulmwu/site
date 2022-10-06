import React from 'react'
import { Theme, ThemeContext } from '../../context/theme'
import { PropsBase } from '../index'

interface Props extends Partial<PropsBase> {
    className?: string
    fontSize?: number | string
    stroke?: boolean
    color?: string
}

export default ((props: Props) => {
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
})
