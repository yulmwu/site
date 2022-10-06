import React from 'react'
import { PropsBase } from '../index'
import { Theme, ThemeContext } from '../../context/theme'

export default (props: Partial<PropsBase>) => {
    const { toggle } = React.useContext(ThemeContext) as Theme

    return (
        <div
            className={`flex flex-col content-center justify-center text-center h-screen bg-transparent ${toggle ? 'text-white' : 'text-gray-800'} ${
                props.className ?? ''
            }`}
        >
            {props.children}
        </div>
    )
}
