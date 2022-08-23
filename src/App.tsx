import React from 'react'
import create from 'zustand'

import * as Utilitiy from './utils'

import { Theme, ThemeContext } from '../context/theme'

interface Props {
    inc: number
    toggleButton?: boolean
}

const useStore = create<Record<string, any>>((set) => ({
    count: 0,
    increment: (inc: number) => set((state) => ({ count: state.count + inc })),
    decrement: (dec: number) => set((state) => ({ count: state.count - dec })),
}))

const Button: React.FC<Props> = (props: Props) => {
    const { toggle, toggleTheme } = React.useContext(ThemeContext) as Theme
    const { increment: inc, decrement: dec } = useStore()

    const memoizedIncrement = React.useCallback(() => inc(props.inc), [inc])
    const memoizedDecrement = React.useCallback(() => dec(props.inc), [dec])

    return (
        <div className='inline-block bg-transparent'>
            <div>
                <Utilitiy.Button onClick={memoizedIncrement} fontSize={'text-5xl'}>
                    +
                </Utilitiy.Button>
                <Utilitiy.Button onClick={memoizedDecrement} fontSize={'text-5xl'}>
                    -
                </Utilitiy.Button>
            </div>
            {props.toggleButton && (
                <button
                    className={`text-3xl sm:text-5xl focus:outline-none text-transparent ${toggle ? 'text-stroke-1' : 'text-stroke-light-1'}`}
                    onClick={toggleTheme}
                >
                    Toggle {toggle ? 'light' : 'dark'}
                </button>
            )}
        </div>
    )
}

const App: React.FC<Props> = (props: Props) => (
    <Utilitiy.Center>
        <Utilitiy.Text fontSize='text-9xl' stroke>
            {useStore().count}
        </Utilitiy.Text>

        <Button inc={props.inc} toggleButton={props.toggleButton} />
    </Utilitiy.Center>
)

export default App
