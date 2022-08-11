import React from 'react';
import create from 'zustand';
import { Theme, ThemeContext } from './theme';

interface Props {
    inc: number;
    toggleButton?: boolean;
}

const useStore = create<Record<string, any>>((set) => ({
    count: 0,
    increment: (inc: number) => set((state) => ({ count: state.count + inc })),
    decrement: (dec: number) => set((state) => ({ count: state.count - dec })),
}));

const Button: React.FC<Props> = (props: Props) => {
    const { toggle, toggleTheme } = React.useContext(ThemeContext) as Theme;
    const { increment: inc, decrement: dec } = useStore();

    const memoizedIncrement = React.useCallback(() => inc(props.inc), [inc]);
    const memoizedDecrement = React.useCallback(() => dec(props.inc), [dec]);

    return (
        <div className="inline-block bg-transparent">
            <div>
                <button
                    className="pr-2 pl-2 text-5xl"
                    onClick={memoizedIncrement}
                >
                    +
                </button>
                <button
                    className="pr-2 pl-2 text-5xl"
                    onClick={memoizedDecrement}
                >
                    -
                </button>
            </div>
            {props.toggleButton && (
                <button className="text-2xl" onClick={toggleTheme}>
                    Toggle {toggle ? 'light' : 'dark'}
                </button>
            )}
        </div>
    );
};

const App: React.FC<Props> = (props: Props) => {
    const { toggle } = React.useContext(ThemeContext) as Theme;

    return (
        <div
            className={`flex flex-col content-center justify-center text-center h-screen bg-transparent ${
                toggle ? 'text-white' : '#000000'
            }`}
        >
            <p
                className={`text-9xl bg-transparent text-transparent ${
                    toggle ? 'text-stroke' : 'text-stroke-light'
                }`}
            >
                {useStore().count}
            </p>

            <Button inc={props.inc} toggleButton={props.toggleButton} />
        </div>
    );
};

export default App;
