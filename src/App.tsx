import React from 'react'
import create from 'zustand'
import * as Components from './components'
import { Theme, ThemeContext } from './context/theme'

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
                <Components.Button.default onClick={memoizedIncrement} fontSize={'text-5xl'}>
                    +
                </Components.Button.default>
                <Components.Button.default onClick={memoizedDecrement} fontSize={'text-5xl'}>
                    -
                </Components.Button.default>
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
    <Components.Center.default>
        <Components.Text.default fontSize='text-9xl' stroke>
            {useStore().count}
        </Components.Text.default>

        <Button inc={props.inc} toggleButton={props.toggleButton} />
    </Components.Center.default>
)

export default App
